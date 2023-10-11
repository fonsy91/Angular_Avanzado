import { AnimationBuilder, animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animaciones',
  templateUrl: './animaciones.component.html',
  styleUrls: ['./animaciones.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      state('out', style({ transform: 'translateX(100%)' })),
      transition('in => out', animate('500ms ease-out')),
      transition('out => in', animate('500ms ease-in'))
    ])
  ]
})
export class AnimacionesComponent implements OnInit{

  state: string = 'in';

  toggleState() {
    this.state = this.state === 'in' ? 'out' : 'in';
  }

  ngOnInit(): void {
    //Codigo del ngOnInit
  }

  //Metodos de muestra de codigo
  get codigoAnimacion() {
    return `
    @Component({
      ...
      animations: [
        trigger('stateChange', [
          state('state1', style({ transform: 'rotate(0deg)', width: '300px', height: '300px' })),
          state('state2', style({ width: '500px', height: '500px' })),
          transition('state1 => state2', animate('400ms ease-in-out'))
        ])
      ]
    })
    export class ExampleAnimationComponent {
      public state = 'state1';
    }
    `;
  }

  get codigoAnimacion2() {
    return `
    <div class="square" [@stateChange]="state"></div>
    `;
  }
  
}
