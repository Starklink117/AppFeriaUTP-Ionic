import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { CodigosPageRoutingModule } from './codigos-routing.module';

import { CodigosPage } from './codigos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodigosPageRoutingModule,
    ZXingScannerModule
  ],
  declarations: [CodigosPage]
})
export class CodigosPageModule {}
