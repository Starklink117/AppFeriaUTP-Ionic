import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Network, ConnectionStatus } from '@capacitor/network';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  
  shownSections: number[] = [];

  showPassword: boolean = false;

  //Proceso Login
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router,
    private alertController: AlertController
    ) { }

    ngOnInit() {
      this.checkNetworkConnection();
    }

  login(){
    // Enviar los datos de inicio de sesión al servidor
    const userData = {
      nombre: this.username,
      password: this.password
    }

    this.http.post('https://marcocar-001-site1.btempurl.com/api2.php', userData).subscribe((response: any) => {
      // Procesar la respuesta del servidor, por ejemplo, almacenar el token de autenticación
      if (response.success) {        
        localStorage.setItem('userId', response.userId.id);
        this.router.navigate(['/scanner1']);
      } else {
        // Autenticación fallida, muestra un mensaje de error o toma otra acción
        this.showError();
      }
    });

  }

  async showError() {
    const alert = await this.alertController.create({
      header: 'ERROR',
      message: 'EL USUARIO O LA CONTRASEÑA SON INCORRECTOS',
      buttons: ['CERRAR'],
    });

    await alert.present();
  }
  
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  };

  swiperSlideChanged(e:any){
    console.log('changed: ', e)
  }

  toggleSection(section: number) {
    if (this.isSectionShown(section)) {
      this.shownSections = this.shownSections.filter(sec => sec !== section);
    } else {
      this.shownSections.push(section);
    }
  }

  isSectionShown(section: number): boolean {
    return this.shownSections.indexOf(section) !== -1;
  }

  redirectToAnotherPage() {
    this.router.navigate(['/scanner1']); // Reemplaza 'otra-pagina' con el nombre de la ruta de destino.
  }


  //Muestra si no hay internet
  async checkNetworkConnection() {
    const status = await Network.getStatus();

    if (status.connected === true) {
    } else {
      // No hay conexión a Internet
      this.showNoInternetAlert();
    }
  }

  async showNoInternetAlert() {
    const alert = await this.alertController.create({
      header: 'Sin conexión a Internet',
      message: 'Por favor, verifica tu conexión a Internet y vuelve a intentarlo.',
      buttons: ['OK'],
    });

    await alert.present();
  }

}

