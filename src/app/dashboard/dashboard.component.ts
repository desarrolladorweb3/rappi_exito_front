import { Component, OnInit } from '@angular/core';
import { NotificationsComponent } from 'app/notifications/notifications.component';
import { FileToUpload } from 'app/file-upload/file-to-upload';
import {ServiceService} from '../components/api/service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  messages: string[] = [];
  theFile: any = null;
  veces_notificado: number = 0;
  disabled = true;
  archivo: any;
  envio_exitoso = false;
  estado_tabla = false;
  dtOptions: any = {};
  constructor(private apiClient: ServiceService) { }
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 15,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json'
      },
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'excel'
      ]
    };
  }
  onFileChange(event) {
    this.theFile = null;
    if (event.target.files && event.target.files.length > 0) {
      // Don't allow file sizes over 1MB
        if (event.target.files[0].size < 1048576) {
          this.theFile = event.target.files[0];
          if(event.target.files[0].type == "application/vnd.ms-excel"){
            this.disabled = !this.disabled;
          }else{
            this.messages.push("El archivo: " + event.target.files[0].name + " no está en formato CSV.");
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'Estas tratando de subir un archivo que no tiene formato CSV!'
            })
            this.archivo = null;
            this.disabled = true;
          }
        }
        else {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'El archivo pesa más de 1GB!'
            })
            this.archivo = null;
            this.disabled = true;
        }
    }
  }

  notificarEspera(){
    let notificacion = new NotificationsComponent();
    notificacion.showNotificationEspera('top','center', 'Espera un momento mientras se carga la información!');
    this.veces_notificado = 1;
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
        this.apiClient.uploadFile(file).subscribe((resp) => { 
            console.log(resp); });
    }
    
    // Read the file
    reader.readAsDataURL(theFile);
  }

  uploadFile(): void {
      this.disabled = !this.disabled;
      this.notificarEspera();
      this.envio_exitoso = true;
      this.readAndUploadFile(this.theFile);
  }

  getDataTable(){
    if(!this.estado_tabla){
      let tabla = $('#tabla-reporte-ejecucion').DataTable(this.dtOptions);
      this.estado_tabla = true;
    }
  }

  refresh(): void {
    location.reload();
  }

  verDetalle(){
    
  }
}
