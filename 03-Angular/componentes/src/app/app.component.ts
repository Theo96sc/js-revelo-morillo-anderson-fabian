import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'componentes';
  arregloObjetos = [
    {
      id: 1, // number
      "nombre": "Anderson",
      apellido: 'Revelo',
      sueldo: 12.12,
      casado: false,
      comida: "https://s03.s3c.es/imag/_v0/770x420/2/8/d/Comida-basura.jpg",
      carro: null,
      ojos: undefined,

    },
    {
      id: 2, // number
      "nombre": "Hyt",
      apellido: 'ytr',
      sueldo: 12.43,
      casado: true,
      comida: "https://s03.s3c.es/imag/_v0/770x420/a/1/e/Pizza-casera.jpg",
      carro: null,
      ojos: undefined,

    },
    {
      id: 3, // number
      "nombre": "truif",
      apellido: 'rtry',
      sueldo: 12.67,
      casado: true,
      comida: "https://www.vivus.es/blog/wp-content/uploads/2018/04/comida-sana-y-barata.jpg",
      carro: null,
      ojos: undefined,

    }
  ];

  imprimirSueldo(sueldo: string) {
    console.log(sueldo);
  }
}
