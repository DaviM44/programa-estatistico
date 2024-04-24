import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelainicialComponent } from './telainicial/telainicial.component';

const routes: Routes = [
  {path: 'inicio', component: TelainicialComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
