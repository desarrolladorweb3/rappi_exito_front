import { Component, OnInit } from '@angular/core';
import { NotificationsComponent } from 'app/notifications/notifications.component';
import {ServiceService} from '../components/api/service.service';
import ReportObject = enrolls.ReportObject;

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  constructor(private apiClient: ServiceService){}
  dtOptions: any = {};
  dtOptionsDelete: any = {};
  ngOnInit(): void {
    this.dtOptions = {
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json'
      },
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'excel'
      ]
    };
    this.dtOptionsDelete = {
      destroy: true
    }
  }
  escoger_filtro:boolean = true;
  opcion_filtro:string = "";
  resultado_filtro:boolean = false;
  report: ReportObject[];
  filtro_estado:boolean = false; 
  filtro_numero_documento:string = '';
  filtro_rango_fecha_inicial:Date;
  filtro_rango_fecha_final:Date;
  estado_tabla:boolean = false;

  setOpcionFiltro(opcion_filtro){
    this.opcion_filtro = opcion_filtro;
    this.escoger_filtro = false;
  }

  setOpcionFiltroReturn(){
    this.opcion_filtro = "";
    this.escoger_filtro = true;
  }


  getDataTableFiltro(){
    if(!this.estado_tabla){
      var tabla = $('#tabla-filtro').DataTable(this.dtOptions);
      this.estado_tabla = true;
      let notificacion = new NotificationsComponent();
      notificacion.showNotificationEspera('bottom','center', 'Espera un momento mientras se carga la información!');
    }
  }

 
  refresh(): void {
    location.reload();
  }
}
