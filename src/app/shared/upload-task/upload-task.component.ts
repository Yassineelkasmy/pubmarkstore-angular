import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FileUploadService } from 'src/app/services/file-upload.service';

import { FileUpload } from 'src/app/models/FileUpload';

@Component({
  selector: 'app-upload-task',
  templateUrl: './upload-task.component.html',
})
export class UploadTaskComponent implements OnInit {
  constructor(public uploadService: FileUploadService) {}

  ngOnInit(): void {
    this.uploadFile();
  }

  @Input() label: string = '';
  @Input() file?: File;
  cancelled: boolean = false;

  selectedFiles?: FileList;
  currentFileUpload?: FileUpload;
  percentage?: number;
  uploaded: boolean = false;

  @ViewChild('fileInput')
  myInputVariable?: ElementRef;

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }

  uploadFile(): void {
    this.currentFileUpload = new FileUpload(this.file!);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(
      (percentage) => {
        this.percentage = Math.round(percentage!);
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.uploaded = true;
      }
    );
  }

  deleteFileUpload(): void {
    this.cancelled = true;

    this.uploadService.deleteFile(this.currentFileUpload!);
    this.uploaded = false;
    this.currentFileUpload = undefined;
    this.myInputVariable!.nativeElement.value = '';
  }
}
