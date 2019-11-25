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
  @Output() cambioSueldo = new EventEmitter<string>(); // evento

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
    this.ancho = (Number(this.ancho) + 10).toString();
    console.log(this.ancho);
  }

  // cuando el suuario da click en el boton , quiero sque saumento el tamalo del ancho y del largo

}
