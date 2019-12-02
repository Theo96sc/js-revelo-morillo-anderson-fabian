var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
import { Component, EventEmitter, Input, Output } from '@angular/core';
export let MiPrimerComponenteComponent = class {
    // Para que el papa escuche
    constructor() {
        // class (etiqueta html) (web-component)
        // Instanciar a la clase
        // Clase esta lista
        // Clase se destruye
        this.ancho = 200;
        this.cambioSueldo = new EventEmitter(); // evento
        this.mostrarResultados = new EventEmitter();
        this.suma = 0;
        this.resta = 0;
        this.multiplicacion = 0;
        this.division = 0;
        console.log('instanciando');
    } // instancia la clase (Ayuda -> Angular) ellos se encargan de instancair la clase.
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
    }
    aumentarTamanio() {
        this.ancho = this.ancho + 10;
        console.log(this.ancho);
    }
    // cuando el suuario da click en el boton , quiero sque saumento el tamalo del ancho y del largo
    escucharNum(event) {
        console.log(event.srcElement.value);
        this.numUno = Number(event.srcElement.value);
        if (typeof this.numUno !== 'number') {
        }
        this.calcular();
    }
    escucharNum2(event) {
        console.log(this.numDos);
        this.numDos = Number(event.srcElement.value);
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
};
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "titulo");
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "imagen");
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "textoImagen");
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "textoBoton");
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "numUno");
__decorate([
    Input()
], MiPrimerComponenteComponent.prototype, "numDos");
__decorate([
    Output()
], MiPrimerComponenteComponent.prototype, "cambioSueldo");
__decorate([
    Output()
], MiPrimerComponenteComponent.prototype, "mostrarResultados");
MiPrimerComponenteComponent = __decorate([
    Component({
        selector: 'app-mi-primer-componente',
        templateUrl: './mi-primer-componente.component.html',
        styleUrls: ['./mi-primer-componente.component.scss']
    })
], MiPrimerComponenteComponent);
