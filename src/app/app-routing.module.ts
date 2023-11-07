import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'type',
    loadChildren: () => import('./type/type.module').then( m => m.TypePageModule)
  },
  {
    path: 'profesores',
    loadChildren: () => import('./profesores/profesores.module').then( m => m.ProfesoresPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'proyectos',
    loadChildren: () => import('./proyectos/proyectos.module').then( m => m.ProyectosPageModule)
  },
  {
    path: 'resultados',
    loadChildren: () => import('./resultados/resultados.module').then( m => m.ResultadosPageModule)
  },
  {
    path: 'codigos',
    loadChildren: () => import('./codigos/codigos.module').then( m => m.CodigosPageModule)
  },
  {
    path: 'reportes',
    loadChildren: () => import('./reportes/reportes.module').then( m => m.ReportesPageModule)
  },
  {
    path: 'altas',
    loadChildren: () => import('./profesores/altas/altas.module').then( m => m.AltasPageModule)
  },

  {
    path: 'ranking',
    loadChildren: () => import('./ranking/ranking.module').then( m => m.RankingPageModule)
  },
  {
    path: 'scanner1',
    loadChildren: () => import('./scanner1/scanner1.module').then( m => m.Scanner1PageModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
