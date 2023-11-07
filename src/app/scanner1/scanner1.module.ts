import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedTestingModule } from 'src/tests/modules';
import { IonicModule } from '@ionic/angular';

import { Scanner1PageRoutingModule } from './scanner1-routing.module';

import { Scanner1Page } from './scanner1.page';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,    
    Scanner1PageRoutingModule,
    SharedTestingModule,
  ],
  declarations: [Scanner1Page, BarcodeScanningModalComponent]
})
export class Scanner1PageModule {}
