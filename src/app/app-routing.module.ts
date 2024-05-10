import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelainicialComponent } from './telainicial/telainicial.component';
import { CondicionadoComponent } from './condicionado/condicionado.component';

const routes: Routes = [
  {path: 'inicio', component: TelainicialComponent },
  {path: 'cond', component: CondicionadoComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
