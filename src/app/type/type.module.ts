import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { IonicModule } from '@ionic/angular';

import { TypePageRoutingModule } from './type-routing.module';

import { TypePage } from './type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypePageRoutingModule, HttpClientModule
  ],
  declarations: [TypePage]
})
export class TypePageModule {}
