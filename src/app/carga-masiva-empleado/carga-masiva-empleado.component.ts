import { Component, OnInit } from '@angular/core';
import { FileToUpload } from 'app/file-upload/file-to-upload';
import {ServiceService} from '../components/api/service.service';

@Component({
  selector: 'app-carga-masiva-empleado',
  templateUrl: './carga-masiva-empleado.component.html',
  styleUrls: ['./carga-masiva-empleado.component.css']
})
export class CargaMasivaEmpleadoComponent implements OnInit {

  constructor(private apiClient: ServiceService) { }
  messages: string[] = [];
  theFile: any = null;
  ngOnInit() {
  }
  onFileChange(event) {
    this.theFile = null;
    if (event.target.files && event.target.files.length > 0) {
        // Don't allow file sizes over 1MB
        if (event.target.files[0].size < 1048576) {
            // Set theFile property
            this.theFile = event.target.files[0];
        }
        else {
            // Display error message
            this.messages.push("El archivo: " + event.target.files[0].name + " pesa más de 1MB, no podrá ser cargado.");
        }
    }
  }
  private readAndUploadFile(theFile: any) {
    let file = new FileToUpload();
    
    // Set File Information
    file.fileName = theFile.name;
    file.fileSize = theFile.size;
    file.fileType = theFile.type;
    file.lastModifiedTime = theFile.lastModified;
    file.lastModifiedDate = theFile.lastModifiedDate;
    
    // Use FileReader() object to get file to upload
    // NOTE: FileReader only works with newer browsers
    let reader = new FileReader();
    
    // Setup onload event for reader
    reader.onload = () => {
        // Store base64 encoded representation of file
        file.fileAsBase64 = reader.result.toString();
        
        // POST to server
        this.apiClient.uploadFile(theFile).subscribe(resp => { 
            console.log(this.messages.push("Archivo subido exitosamente!")); });
    }
    
    // Read the file
    reader.readAsDataURL(theFile);
  }
  uploadFile(): void {
      this.readAndUploadFile(this.theFile);
  }
}
