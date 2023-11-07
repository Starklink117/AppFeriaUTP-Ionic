import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Scanner1Page } from './scanner1.page';

const routes: Routes = [
  {
    path: '',
    component: Scanner1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class Scanner1PageRoutingModule {}
