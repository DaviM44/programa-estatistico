import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TelainicialComponent } from './telainicial/telainicial.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CondicionadoComponent } from './condicionado/condicionado.component';

@NgModule({
  declarations: [
    AppComponent,
    TelainicialComponent,
    CondicionadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
