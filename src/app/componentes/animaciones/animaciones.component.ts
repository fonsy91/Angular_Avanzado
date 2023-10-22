import { AnimationBuilder, animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animaciones',
  templateUrl: './animaciones.component.html',
  styleUrls: ['./animaciones.component.scss'],
  animations: [
    trigger('stateChange', [
      state('animated, animated2', style({
        width: '{{width}}px',
        height: '{{height}}px',
        borderRadius: '{{borderRadius}}px',
        backgroundColor: '#{{backgroundColor}}',
      }),{
        params: {
          width: 50,
          height: 50,
          borderRadius: 30,
          backgroundColor: 'e83763'
        }
      }),
      transition('* <=> *', animate('400ms ease-in-out'))
    ]),
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(15px)' }),
        animate('600ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('600ms', style({ opacity: 0, transform: 'translateY(15px)' })),
      ]),
    ])
  
  ],
  
  
})
export class AnimacionesComponent implements OnInit{

  state: string = 'in';
  show = true;

  toggleState() {
    this.state = this.state === 'in' ? 'out' : 'in';
  }

  ngOnInit(): void {
    //Codigo del ngOnInit
  }

  //Arranca la animacion con los siguientes valores
  animationState = {
    value: 'animated',
    params: {
      width: 100,
      height: 100,
      backgroundColor: 'e83763',
      borderRadius: 30
    }
  };

  animate(): void {
    this.animationState = {
      //Cada vez que se aprieta el boton se va alternando entre animated y animated2
      //Y se le van asignando valores de anchura, altura color y radio aleatorios
      value: this.animationState.value === 'animated' ? 'animated2' : 'animated',
      params: {
        width: this.getRandomNumber(0, 350),
        height: this.getRandomNumber(0, 350),
        backgroundColor: this.getRandomHexadecimal(),
        borderRadius: this.getRandomNumber(0, 50)
      }
    };
  }

  private getRandomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  private getRandomHexadecimal(): string {
    return Math.floor(Math.random()*16777215).toString(16);
  }

  //Metodo que se utiliza para enseñar y ocultar el card de ramen (Animaciones de entrada y salida)
  showHide() {
    this.show = !this.show;
  }

  //Metodos de muestra de codigo *****************************************
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

  get codigoAnimacion3() {
    return `
    //Codigo .ts
    animations: [
      trigger('stateChange', [
        state('animated, animated2', style({
          width: '{{width}}px',
          height: '{{height}}px',
          borderRadius: '{{borderRadius}}px',
          backgroundColor: '#{{backgroundColor}}',
        }),{
          params: {
            width: 50,
            height: 50,
            borderRadius: 30,
            backgroundColor: 'e83763'
          }
        }),
        transition('* <=> *', animate('400ms ease-in-out'))
      ])
    ]

    animationState = {
      value: 'animated',
      params: {
        width: 100,
        height: 100,
        backgroundColor: 'e83763',
        borderRadius: 30
      }
    };
  
    animate(): void {
      this.animationState = {
        //Cada vez que se aprieta el boton se va alternando entre animated y animated2
        //Y se le van asignando valores de anchura, altura color y radio aleatorios
        value: this.animationState.value === 'animated' ? 'animated2' : 'animated',
        params: {
          width: this.getRandomNumber(0, 350),
          height: this.getRandomNumber(0, 350),
          backgroundColor: this.getRandomHexadecimal(),
          borderRadius: this.getRandomNumber(0, 50)
        }
      };
    }

    private getRandomNumber(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }
  
    private getRandomHexadecimal(): string {
      return Math.floor(Math.random()*16777215).toString(16);
    }

    //Codigo html
    <button type="button" class="btn btn-secondary" style="margin-bottom: 40px;" (click)="animate()">Animacion</button>
    <div [@stateChange]="animationState"></div>
    `;
  }

  get codigoAnimacion4() {
    return `
    //Codigo .ts
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(15px)' }),
        animate('600ms', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
      transition(':leave', [
        animate('600ms', style({ opacity: 0, transform: 'translateY(15px)' })),
      ]),
    ])

    showHide() {
      this.show = !this.show;
    }

    //Codigo html
    <div style="margin-bottom: 40px;" class="actions">
        <button type="button" class="btn btn-secondary" (click)="showHide()">{{ show ? 'Ocultar' : 'Mostrar' }}</button>
    </div>
    <div class="card mb-3" style="max-width: 540px;" *ngIf="show" @fadeInOut>
        <div class="row g-0">
          <div class="col-md-4">
            <img src="https://images.unsplash.com/photo" alt="">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Ramen</h5>
              <p class="card-text">12€</p>
            </div>
          </div>
        </div>
    </div>
    `;
  }
  
}
