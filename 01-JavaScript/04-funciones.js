// funucibes que no devukeven nada

function imprimirMensaje(mensaje) {
    if(typeof mensaje === 'number' || typeof mensaje === 'string'){
        const impresion = `Mensaje ${mensaje} `;
        console.log(impresion);
        return impresion;
    }else {
        console.error('Error XD');
    }
    // los voids => undefined, osea que no tiene un return
}

imprimirMensaje();

const respuesta = imprimirMensaje(); // esto devuekve undefined
console.log(respuesta);

function sumarDosElementos(numeroUno,numeroDos) {
    return numeroUno + numeroDos;
}


console.log(sumarDosElementos(1,6));

// parametros infinitos normalmente van al final
function sumarElementos(numeroUno, ...arregloParametrosInfinitos) {

    // arreglo.reduce((a,b)=>a+b,numeroUno);
    console.log(arregloParametrosInfinitos);
    if(arregloParametrosInfinitos){
        return arregloParametrosInfinitos.reduce(
            (valorInicial, valorActual)=>{
                return valorInicial + valorActual;
            }, numeroUno
        )
    }else{
        return numeroUno;
    }
}
const suma = sumarElementos(1,2,3,4,5,6);
console.log(suma);

// como se deben definir una funcion

const restar = function restarF(a,b){
    return a - b;
}

const restar1 = function (a,b) {
    return a -b;
}

// fat arrow function => Anonymous function
const restar2 = (a,b)=> {
    return a -b;
}

// tbn puede asignarase a una propiedad de un objeto
const restar3 = {
    nombre: 'Anderson',
    restarNumeros : (a,b)=> {
        return a -b;
    },

}

const trasnsformarAMayuscula = (letra) => letra.toUpperCase();
// solo cuando hay un parametro se puede quitar los parentesis
const trasnsformarAMayuscula2 = letra => letra.toUpperCase();

// ... en una función sifnifica DESCTRUCTURAR PARAMETROS

const arregloDeNumeros = [1,2,3,4,5,6];
const arregloDeNumerosDos = [7,8,9,10,11,12];
console.log('sumar elemntos con ...',sumarElementos(...arregloDeNumeros));

const arregloUnido =[...arregloDeNumeros,...arregloDeNumerosDos];
console.log(arregloUnido);

const objetoAnderson = {
    nombre: 'Anderson'
};

const objetoRevelo = {
    apellido: 'Revelo'
};

const objetoAndersonRevelo = {
    ...objetoAnderson,
    ...objetoRevelo,
    edad: 23
};

console.log(objetoAndersonRevelo);

function cambiarEdad (Edad, objeto) {
    objeto.edad = edad;
    return objeto;
}


// clonar objetos

const oAREnString = JSON.stringify(objetoAndersonRevelo);
console.log(typeof oAREnString, oAREnString);

const oARClonado = JSON.parse(oAREnString);
console.log(typeof oARClonado, oARClonado);

oARClonado.edad = 69;
console.log(oARClonado);

// clonado rapido

const clonadoAR = {
    ...objetoAndersonRevelo
};

console.log('clonado fast',clonadoAR);

// esto esta mal
// const clonado = objetoAndersonRevelo