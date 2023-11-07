import { Component, OnInit, NgZone } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { DialogService } from '../core';
import {
  Barcode,
  BarcodeFormat,
  BarcodeScanner,
  LensFacing,
} from '@capacitor-mlkit/barcode-scanning';
import { FilePicker } from '@capawesome/capacitor-file-picker';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { Network, ConnectionStatus } from '@capacitor/network';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-scanner1',
  templateUrl: './scanner1.page.html',
  styleUrls: ['./scanner1.page.scss'],
})
export class Scanner1Page implements OnInit {
  mostrarBoton: boolean = false;
  calificaciones: number[] = [];
  data: any;
  public readonly lensFacing = LensFacing;

  public formGroup = new UntypedFormGroup({
    formats: new UntypedFormControl([]),
    lensFacing: new UntypedFormControl(LensFacing.Back),
    googleBarcodeScannerModuleInstallState: new UntypedFormControl(0),
    googleBarcodeScannerModuleInstallProgress: new UntypedFormControl(0),
  });
  public barcodes: Barcode[] = [];
  public isSupported = false;
  public isPermissionGranted = false;

  constructor(private readonly dialogService: DialogService,
    private readonly ngZone: NgZone,
    private http: HttpClient,
    private alertController: AlertController) { }

  public ngOnInit(): void {
    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });
    BarcodeScanner.checkPermissions().then((result) => {
      this.isPermissionGranted = result.camera === 'granted';
    });

    this.checkNetworkConnection();
  }

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

  public async startScan(): Promise<void> {
    this.data = []; // Limpia los datos
    this.calificaciones = [];
    this.mostrarBoton = false;
    const formats = this.formGroup.get('formats')?.value || [];
    const lensFacing =
      this.formGroup.get('lensFacing')?.value || LensFacing.Back;
    const element = await this.dialogService.showModal({
      component: BarcodeScanningModalComponent,
      // Set `visibility` to `visible` to show the modal (see `src/theme/variables.scss`)
      cssClass: 'barcode-scanning-modal',
      showBackdrop: false,
      componentProps: {
        formats: formats,
        lensFacing: lensFacing,
      },
    });
    element.onDidDismiss().then((result) => {
      var barcode: Barcode | undefined = result.data?.barcode;
      if (barcode) {
        this.barcodes = [barcode];

        
        const codigobarra = barcode.displayValue;
        const userId = localStorage.getItem('userId');
        const apiURL= 'https://marcocar-001-site1.btempurl.com//api2.php?proyecto=' + codigobarra +'&userId=' + userId;

        this.http.get(apiURL).subscribe((data: any) => {
          this.data = data;
          if(data.success == false){
            this.showNoExist();
          }else{
            localStorage.setItem('proyectId', data[0]['id']);
            this.mostrarBoton = true;
          }
        });

      }
    });
  }

  public async requestPermissions(): Promise<void> {
    await BarcodeScanner.requestPermissions();
  }


  buscar(){
    document.querySelector('body')?.classList.add('barcode-scanning-active');
    document.querySelector('body')?.classList.remove('barcode-scanning-active');

    const codigobarra ="Minecraft";
    const userId = localStorage.getItem('userId');
    const apiURL= 'https://marcocar-001-site1.btempurl.com//api2.php?proyecto=' + codigobarra +'&userId=' + userId;

    this.http.get(apiURL).subscribe((data: any) => {
      // Procesar la respuesta del servidor, por ejemplo, almacenar el token de autenticación
      this.data = data;
      if(data.success == false){
        this.showNoExist();
      }else{
        localStorage.setItem('proyectId', data[0]['id']);
        this.mostrarBoton = true;
      }
      //console.log("Aqui está ", data[0]['id']);
    }
    );
  }

  async showNoExist() {
    const alert = await this.alertController.create({
      header: 'Error!',
      message: 'Parece que ese proyecto no existe',
      buttons: ['CERRAR'],
    });

    await alert.present();
  }


  //Enviar calificación
  calcularSumaYEnviar() {
    const apiURL = `https://marcocar-001-site1.btempurl.com/apiSuma.php`;

    const postData = {
      sumaCalificaciones: this.calificaciones,
      proyecto: localStorage.getItem('proyectId')
    };
  
    this.http.post(apiURL, postData).subscribe(
      (data: any) => {
        // Procesar la respuesta del servidor si es necesario
        if(data.success){
          console.log('Respuesta del servidor:', data);
          document.querySelector('body')?.classList.add('barcode-scanning-active');        
          document.querySelector('body')?.classList.remove('barcode-scanning-active');
          this.data = []; // Limpia los datos
          this.calificaciones = [];
          this.mostrarBoton = false;
          
          this.showCalAlert();  
          }   
          else{
            this.showNoCalAlert();
          }   
      }
    );
  }

  async showCalAlert() {
    const alert = await this.alertController.create({
      header: 'Listo!',
      message: 'La calificación se registró con exito!',
      buttons: ['CERRAR'],
    });

    await alert.present();
  }

  async showNoCalAlert() {
    const alert = await this.alertController.create({
      header: 'Lo sentimos!',
      message: 'Parece que este proyecto ya está calificado',
      buttons: ['CERRAR'],
    });

    await alert.present();
  }
}
