import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesoresPage } from './profesores.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesoresPage,
    pathMatch: 'full'
  },
  {
    path: 'altas',
    loadChildren: () => import('./altas/altas.module').then( m => m.AltasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesoresPageRoutingModule {}
