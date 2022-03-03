import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropzoneDirective } from '../directives/dropzone.directive';
import { AuthService } from '../auth/auth.service';
import { UploadFieldComponent } from './upload-field/upload-field.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { UploaderComponent } from './uploader/uploader.component';
import { AuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    DropzoneDirective,
    UploadFieldComponent,
    UploadTaskComponent,
    UploaderComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    CommonModule,
    AuthModule,
    ReactiveFormsModule,
    FormsModule,
    DropzoneDirective,
    UploadFieldComponent,
    UploadTaskComponent,
    UploaderComponent,
  ],
  providers: [AuthService],
})
export class SharedModule {}
