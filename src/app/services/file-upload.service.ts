import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FileUpload } from '../models/FileUpload';
import { finalize, Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private basePath = 'uploads';
  private folder = 'createapp';

  constructor(
    private storage: AngularFireStorage,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase
  ) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.basePath = user.uid;
      }
    });
  }

  pushFileToStorage(fileUpload: FileUpload): Observable<number | undefined> {
    const filePath = `${this.basePath}/${this.folder}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask
      .snapshotChanges()
      .pipe(
        finalize(() => {
          storageRef.getDownloadURL().subscribe((downloadURL) => {
            fileUpload.url = downloadURL;
            fileUpload.name = fileUpload.file.name;
            this.saveFileData(fileUpload);
          });
        })
      )
      .subscribe();

    return uploadTask.percentageChanges();
  }
  private saveFileData(fileUpload: FileUpload) {
    const userFilesData: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${this.basePath}`
    );

    var dataMap: Map<string, string> = new Map();

    dataMap.set(this.folder, fileUpload.name!);

    let dataObj = Array.from(dataMap).reduce(
      (obj, [key, value]) => Object.assign(obj, { [key]: value }),
      {}
    );

    return userFilesData.set(dataObj, { merge: true });
  }

  deleteFile(fileUpload: FileUpload): void {
    this.deleteFileStorage(fileUpload.name!);
  }

  private deleteFileStorage(name: string): void {
    const storageRef = this.storage.ref(this.basePath + '/' + this.folder);
    storageRef.child(name).delete();
  }
}
