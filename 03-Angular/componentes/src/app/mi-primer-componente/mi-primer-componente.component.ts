import {Component, Input, OnDestroy, OnInit} from '@angular/core';

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



  // como recivbimos cosas de afuera? para ello utilizamos decoradores. las interefaces se implementas, las clases se exportan
  @Input() titulo: string;
  @Input() imagen: string;
  @Input() textoImagen: string;
  @Input() textoBoton: string;


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
    console.log('');
  }

  saludar() {
    alert("HOLA MUNDO");
  }

}
