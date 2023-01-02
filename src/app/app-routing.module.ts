import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarRucComponent } from './pages/buscar-ruc/buscar-ruc.component';

const routes: Routes = [
  { path: '', component: BuscarRucComponent, title: 'Buscar RUC or DNI' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
