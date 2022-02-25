import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FileUpload } from 'src/app/models/FileUpload';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-upload-field',
  templateUrl: './upload-field.component.html',
})
export class UploadFieldComponent implements OnInit {
  constructor(public uploadService: FileUploadService) {}

  ngOnInit(): void {}

  @Input() label: string = '';

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
    const file = this.selectedFiles!.item(0);
    this.selectedFiles = undefined;

    this.currentFileUpload = new FileUpload(file!);
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
    this.uploadService.deleteFile(this.currentFileUpload!);
    this.uploaded = false;
    this.currentFileUpload = undefined;
    this.myInputVariable!.nativeElement.value = '';
  }
}
