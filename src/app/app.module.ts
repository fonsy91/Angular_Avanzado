import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { PfuncionalComponent } from './componentes/pfuncional/pfuncional.component';
import { ResaltadoDirective } from './directivas/resaltado.directive';
import { AnimacionesComponent } from './componentes/animaciones/animaciones.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta predeterminada
  { path: 'pFuncional', component: PfuncionalComponent },
  { path: 'animaciones', component: AnimacionesComponent },
  { path: '**', redirectTo: '/home' } // Ruta no encontrada
];

@NgModule({
  declarations: [
    AppComponent,
    PfuncionalComponent,
    ResaltadoDirective,
    AnimacionesComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
