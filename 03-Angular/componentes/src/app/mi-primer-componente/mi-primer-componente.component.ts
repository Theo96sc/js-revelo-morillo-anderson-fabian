import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.scss']
})
export class MiPrimerComponenteComponent implements OnInit, OnDestroy {

  // class (etiqueta html) (web-component)
  // Instanciar a la clase
  // Clase esta lista
  // Clase se destruye
  ancho = 200;


  // como recivbimos cosas de afuera? para ello utilizamos decoradores. las interefaces se implementas, las clases se exportan
  @Input() titulo: string; // atributo o propiedad de nuestro componente.
  @Input() imagen: string;
  @Input() textoImagen: string;
  @Input() textoBoton: string;

  @Input() numUno: number;
  @Input() numDos: number;


  @Output() cambioSueldo = new EventEmitter(); // evento
  @Output() enviarNumerosAOperaciones = new EventEmitter();
  @Output() mostrarResultados = new EventEmitter();


  suma = 0;
  resta = 0;
  multiplicacion = 0;
  division = 0;

  // Para que el papa escuche


  constructor() {
    console.log('instanciando');
  }// instancia la clase (Ayuda -> Angular) ellos se encargan de instancair la clase.

  ngOnInit() {
    // Para que la clase este lista
    console.log('Esta listo');
    console.log(this.titulo);
    console.log(this.textoImagen);
    console.log(this.textoBoton);
  }

  ngOnDestroy() {
    // la clase esta destruida o esta por destruirse
    console.log('Se destruye ctm');
  }

  saludar() {
    alert("HOLA MUNDO");
  }

  aumentarSueldo() {
    this.textoBoton = (Number(this.textoBoton) + 1).toString();
    this.cambioSueldo.emit(this.textoBoton);
    // this.textoBoton = (+this.textoBoton + 1).toString() ;
  }

  aumentarTamanio() {
    this.ancho = this.ancho + 10;
    console.log(this.ancho);
  }

  // cuando el suuario da click en el boton , quiero sque saumento el tamalo del ancho y del largo

  escucharNum(event) {
    console.log(event.srcElement.value);
    this.numUno = Number(event.srcElement.value);
    //this.enviarNumeroAOperaciones.emit(this.numUno);
    this.calcular();
  }

  escucharNum2(event) {

    this.numDos = Number(event.srcElement.value);
    console.log(this.numDos);
    //this.enviarNumeroAOperaciones.emit(this.numDos);
    this.calcular();
  }

  calcular() {
    let num1 = Number(this.numUno);
    let num2 = Number(this.numDos);

    console.log(num1 + num2);
    this.suma = num1 + num2;

    this.resta = num1 - num2;
    this.multiplicacion = num1 * num2;
    this.division = num1 / num2;

  }

}
