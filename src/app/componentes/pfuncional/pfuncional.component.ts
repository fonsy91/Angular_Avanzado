import { Component, OnInit } from '@angular/core';

//Modelo de datos de una perosna
interface Persona {
  nombre: string;
  edad: number;
}

@Component({
  selector: 'app-pfuncional',
  templateUrl: './pfuncional.component.html',
  styleUrls: ['./pfuncional.component.scss']
})
export class PfuncionalComponent implements OnInit{

  // Sort cambia o muta el array original y eso es una 
  // desventaja en programacion funcional no se debe 
  // mutar la variable original
  numeros = [5,3,2,1,4];
  numerosOrdenados = this.numeros.sort();

  // toSorted en cambio no muta la variable original
  // numeros.toSorted();

  //Metodo Filter *********************************
  //Filtrar numeros mayores que un valor especifico
  numeros2 = [10, 20, 30, 40, 50];
  valorLimite = 30;
  numerosMayoresAlLimite = this.numeros2.filter(valor => valor >this.valorLimite);

  //Personas mayores de 25 años para utilizar filter con objetos
  personas: Persona[] = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 30 },
    { nombre: 'Pedro', edad: 22 },
  ];

  personasMayoresDe25 = this.personas.filter(persona => persona.edad > 25);

  //Palabras que contienen una subcadena
  palabras = ['manzana', 'banana', 'naranja', 'uva'];
  subcadena = 'na';

  palabrasConSubcadena = this.palabras.filter(palabra => palabra.includes(this.subcadena));

  //Find
  //Primer numero par 
  primerNumeroPar = this.numeros.find((numero) => numero % 2 === 0);
  //Primera persona que se llame pedro
  personaPedro = this.personas.find((persona) => persona.nombre === 'Pedro');

  //FindIndex
  indice = this.personas.findIndex((persona) => persona.nombre === "Bob");

  //Some
  result = this.numeros.some((element) => element > 3);

  //Every
  areAllEven = this.numeros.every((element) => element % 2 === 0);

  //Map
  doubledNumbers = this.numeros.map((element) => element * 2);

  ngOnInit(): void {
    console.log(this.numerosOrdenados);
    console.log("Filter num mayores a un limite: ", this.numerosMayoresAlLimite);
    console.log("Filter personas mayores a una edad: ", this.personasMayoresDe25);
    console.log("Filter palabras que contienen na: ", this.palabrasConSubcadena);
  }

  //Codigos a mostrar por pantalla
  get codigoFilter() {
    return `
    //Filter
    // Sort cambia o muta el array original y eso es una 
    // desventaja en programacion funcional no se debe 
    // mutar la variable original
    numeros = [5,3,2,1,4];
    numerosOrdenados = this.numeros.sort();

    // toSorted en cambio no muta la variable original
    // numeros.toSorted();

    //Metodo Filter *********************************
    //Filtrar numeros mayores que un valor especifico
    numeros2 = [10, 20, 30, 40, 50];
    valorLimite = 30;
    numerosMayoresAlLimite = this.numeros2.filter(valor => valor >this.valorLimite);

    //Personas mayores de 25 años para utilizar filter con objetos
    personas: Persona[] = [
      { nombre: 'Juan', edad: 25 },
      { nombre: 'María', edad: 30 },
      { nombre: 'Pedro', edad: 22 },
    ];

    personasMayoresDe25 = this.personas.filter(persona => persona.edad > 25);

    //Palabras que contienen una subcadena
    palabras = ['manzana', 'banana', 'naranja', 'uva'];
    subcadena = 'na';

    palabrasConSubcadena = this.palabras.filter(palabra => palabra.includes(this.subcadena));
    `;
  }

  get codigoFind() {
    return `
    //Find
    //Primer numero par 
    primerNumeroPar = this.numeros.find((numero) => numero % 2 === 0);
    //Primera persona que se llame pedro
    personaPedro = this.personas.find((persona) => persona.nombre === 'Pedro');
    `;
  }

  get codigoFindIndex() {
    return `
    //FindIndex
    //Obtiene el indice de la persona Bob en el array si existe
    indice = this.personas.findIndex((persona) => persona.nombre === "Bob");
    `;
  }

  get codigoSome() {
    return `
    //Some
    //Devuelve true ya que existen numeros mayores que 3 sino false
    result = this.numeros.some((element) => element > 3);
    `;
  }

  get codigoEvery() {
    return `
    //Every
    //Devuelve false ya que todos no tienen resto cero
    areAllEven = this.numeros.every((element) => element % 2 === 0);
    `;
  }

  get codigoMap() {
    return `
    //Map
    //A cada elemento del array le multiplica por dos
    doubledNumbers = this.numeros.map((element) => element * 2);
    `;
  }

}
