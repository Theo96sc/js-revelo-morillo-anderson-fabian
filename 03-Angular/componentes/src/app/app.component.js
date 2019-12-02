var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
import { Component } from '@angular/core';
export let AppComponent = class {
    constructor() {
        this.title = 'componentes';
        this.arregloObjetos = [
            {
                id: 1,
                "nombre": "Anderson",
                apellido: 'Revelo',
                sueldo: 12.12,
                casado: false,
                comida: "https://s03.s3c.es/imag/_v0/770x420/2/8/d/Comida-basura.jpg",
                carro: null,
                ojos: undefined,
            },
            {
                id: 2,
                "nombre": "Hyt",
                apellido: 'ytr',
                sueldo: 12.43,
                casado: true,
                comida: "https://s03.s3c.es/imag/_v0/770x420/a/1/e/Pizza-casera.jpg",
                carro: null,
                ojos: undefined,
            },
            {
                id: 3,
                "nombre": "truif",
                apellido: 'rtry',
                sueldo: 12.67,
                casado: true,
                comida: "https://www.vivus.es/blog/wp-content/uploads/2018/04/comida-sana-y-barata.jpg",
                carro: null,
                ojos: undefined,
            }
        ];
    }
    imprimirSueldo(sueldo) {
        console.log(sueldo);
    }
    imprimirResultados(numeroUno, numeroDos) {
        let suma = numeroUno + numeroDos;
        console.log('Suma:', suma);
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
], AppComponent);
