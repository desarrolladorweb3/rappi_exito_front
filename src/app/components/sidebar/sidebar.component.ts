import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Cargar archivo',  icon: 'upgrade', class: '' },
    // { path: '/usuario', title: 'Usuarios',  icon:'person', class: '' },
    // { path: '/reporte', title: 'Reportes',  icon:'content_paste', class: '' },
    // { path: '/carga-masiva-empleado', title: 'Carga masiva empleados',  icon:'person_add_alt', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
