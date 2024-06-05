import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ErrorComponent } from './layout/error/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonajesComponent } from './componentes/personajes/personajes.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PrincipalComponent,
    NavComponent,
    FooterComponent,
    ErrorComponent,
    PersonajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
