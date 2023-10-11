import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularAvanzado';

  //Programacion funcional
  //Animaciones en angular: https://jalcantara90.medium.com/mejora-la-ux-de-tus-aplicaciones-angular-con-animaciones-fcb3533ed98f
  //Lazy Loading 
  //Resolvers 
  //Guards 
  //Directivas
  //Todo sobre formularios 
  //Maquetacion
  //Pagina web con bootstrap
  //Hacer que el boton de buscar haga su funcionalidad

  sidebarActive = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  toggleSidebar() {
    const sidebar = this.elementRef.nativeElement.querySelector('#sidebar');
    if (this.sidebarActive) {
      this.renderer.removeClass(sidebar, 'active');
    } else {
      this.renderer.addClass(sidebar, 'active');
    }
    this.sidebarActive = !this.sidebarActive;
  }

}
