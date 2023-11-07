import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { register } from 'swiper/element/bundle';


register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  items: any[] = [];

  showMenu: boolean = false;
  public appPages = [
    { title: 'Inicio', url: '/type', icon: 'home' },
    { title: 'Profesores', url: '/profesores', icon: 'people' },
    { title: 'Categorías', url: '/categorias', icon: 'list' },
    { title: 'Proyectos Inscritos', url: '/proyectos', icon: 'reader' },
    { title: 'Resultados/Evaluaciones', url: '/resultados', icon: 'bar-chart' },
    { title: 'Código QR', url: '/scanner1', icon: 'qr-code' },
    { title: 'Reportes', url: '/reportes', icon: 'clipboard' },

  ];

  constructor(private router: Router, private http: HttpClient) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Mostrar el menú solo en las páginas deseadas
        this.showMenu = ['/type', '/profesores', '/categorias', '/proyectos', '/resultados', '/codigos', '/reportes'].includes(event.url);
      }
    });
  }

  LogOut(){
    this.router.navigate(['/home'])
  }

  ngOnInit() {
    this.http.get('http://localhost/app/api.php').subscribe((data: any) => {
      this.items = data;
    });
  }
}
