import { Component, OnInit } from '@angular/core';
import { NotificationsComponent } from 'app/notifications/notifications.component';
import {ServiceService} from '../components/api/service.service';
import EmployEnrolls = enrolls.EmployEnrolls;

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  employedDevice: EmployEnrolls[];
  constructor(private apiClient: ServiceService) {
  }
  veces_notificado:number = 0;
  estado_tabla:boolean = false;
  dtOptions: any = {};

  ngOnInit() {
  
  }



  getDataTableUsuario(){
    if(!this.estado_tabla){
      let tabla = $('#tabla-usuarios').DataTable(this.dtOptions);
      this.estado_tabla = true;
    }
  }
  
  notificarEspera(){
    let notificacion = new NotificationsComponent();
    notificacion.showNotificationEspera('top','center', 'Espera un momento mientras se carga la información!');
    this.veces_notificado = 1;
  }

}
