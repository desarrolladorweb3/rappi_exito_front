import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ReporteComponent } from '../../reporte/reporte.component';
import { CargaMasivaEmpleadoComponent } from '../../carga-masiva-empleado/carga-masiva-empleado.component';
import { UsuarioComponent } from '../../usuario/usuario.component';
import { LoginComponent } from '../../login/login.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {AgGridModule} from 'ag-grid-angular';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {DataTablesModule} from 'angular-datatables';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        AgGridModule,
        MatTableModule,
        MatPaginatorModule,
        DataTablesModule,
    ],
  declarations: [
    DashboardComponent,
    CargaMasivaEmpleadoComponent,
    NotificationsComponent,
    ReporteComponent,
    UsuarioComponent,
  ]
})

export class AdminLayoutModule {}
