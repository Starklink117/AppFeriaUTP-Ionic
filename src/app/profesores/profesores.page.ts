import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.page.html',
  styleUrls: ['./profesores.page.scss'],
})
export class ProfesoresPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  altaClicked() {
    // Lógica a realizar cuando se hace clic en el botón "Altas"
    this.router.navigate(['/altas']);
  }

  consultaClicked() {
    // Lógica a realizar cuando se hace clic en el botón "Consultas"
    console.log('Botón "Consultas" clickeado');
  }

}
