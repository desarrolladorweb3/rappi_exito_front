import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { CargaMasivaEmpleadoComponent } from '../../carga-masiva-empleado/carga-masiva-empleado.component';
import { ReporteComponent } from '../../reporte/reporte.component';
import { UsuarioComponent } from '../../usuario/usuario.component';
import { LoginComponent } from '../../login/login.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'usuario',   component: UsuarioComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'carga-masiva-empleado',        component: CargaMasivaEmpleadoComponent },
    { path: 'reporte',        component: ReporteComponent },
    { path: 'login',        component: LoginComponent },
];
