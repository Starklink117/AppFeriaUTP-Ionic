import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-type',
  templateUrl: './type.page.html',
  styleUrls: ['./type.page.scss'],
})
export class TypePage implements OnInit {
  data: any ;

  constructor(private router: Router, private http: HttpClient, private alertController: AlertController) { }

  ngOnInit() {
    this.http.get(`https://marcocar-001-site1.btempurl.com/api2.php?proyecto`).subscribe((data: any) => {
      //console.log(data[0]['Partido']);
      this.data = data;
    },
    (error) => {
      // Manejar el error y mostrar una alerta
      console.error('Error al realizar la solicitud HTTP:', error);
      const errorMessage = error.message || 'Error desconocido';
      this.presentAlert('Error', errorMessage);
    });
  }
  async presentAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK']
    });
  
    await alert.present();
  }

  goToLogin(){
    this.router.navigate(['/home'])
  }

 

}
