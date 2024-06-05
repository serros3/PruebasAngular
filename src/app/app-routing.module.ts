import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { error } from 'console';
import { ErrorComponent } from './layout/error/error/error.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"inicio",
    pathMatch:'full',
  },
  {
    path:"inicio",
    component:InicioComponent
  },
  {
    path:"principal",
    component:PrincipalComponent
  },
  {
    path:"personajes",
    component:PersonajesComponent
  },
  {
    path:"**",
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
