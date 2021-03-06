// que son los callbacks...
// en los parametros de una funcion no le interesa que es dicho paramtro


function calculo(num_uno, num_dos, funcionCalculo) {
    const total = num_uno + num_dos;
    return funcionCalculo(num_uno, num_dos, total);
}

const numeroUno = 3;
const numeroDos = 7;

const suma = (numUno, numDos, total) => {
    return total;
};
// cuando no le ejecutamos la funcion con los parametros
console.log(suma); // definicion de Function

// mientras que con parametros es la ejecucion
//console.log(suma(1,2,3));


const resultadoDelCalculo = calculo(numeroUno, numeroDos,
    (numUno, numDos, total) => {
        return total / 2;
    });


console.log(resultadoDelCalculo);

function forEachLocal(arreglo, funcion) {
    for (let indiceInicial = 0; indiceInicial < arreglo.length; indiceInicial++) {
        funcion(
            arreglo[indiceInicial],
            indiceInicial,
            arreglo
        );
    }
}



forEachLocal(
    [1, 2, 3, 4, 5],
    (valorActual, indice, arreglo) => {
        console.log('actual', valorActual)
    }
);


function map(arreglo, funcion) {

    const arreglo2 = [];

    for (let indiceInicial = 0; indiceInicial < arreglo.length; indiceInicial++) {
        arreglo2.push(funcion(arreglo[indiceInicial]));
    }

    return arreglo2;

}

vectorMap = map([1, 2, 3, 4, 5, 6],
    (valor, indice, arreglo) => {
        return valor + 5;
    });

console.log('Map: ',vectorMap);


// filter

function filter(arreglo, funcion) {
    const arregloFiltrado = [];
    for (let indiceInicial = 0; indiceInicial < arreglo.length; indiceInicial++) {
        if (funcion(arreglo[indiceInicial])) {
            arregloFiltrado.push(arreglo[indiceInicial]);
        }

    }
    return arregloFiltrado;
}


const arregloFiltrado = filter([1, 2, 3, 4, 5, 6, 7],
    (valor) => {
        return valor > 3;
    });

console.log('Filter: ',arregloFiltrado);


function some(arreglo, funcion) {
    let existeElemento = false;
    for (let indice = 0; indice < arreglo.length; indice++) {
        if (funcion(arreglo[indice])) {
            existeElemento = true;
            //return existeElemento;
        }
    }
    return existeElemento;
}

const respuestaSome = some([1, 2, 3, 4, 5, 6, 7, 8],
    (value) => {
        return value > 8;
    });

console.log('Some: ',respuestaSome);

function every(arreglo, funcion) {
    const numeroDeAciertos = arreglo.length;
  //  console.log('size del arreglo', numeroDeAciertos);
    contador = 0;
    for (let indice = 0; indice < arreglo.length; indice++) {
        if (funcion(arreglo[indice])) {
            contador++;
        }

    }
    return contador === numeroDeAciertos ? true : false;

}

const respuestaEvery = every([6, 3, 7, 5],
    (value) => {
        return (value <= 7 && value > 1);
    });

console.log('respuesta Every ', respuestaEvery);



function find(arreglo, funcion) {
   let  elementoEncontrado;
    for (let indice = 0 ; indice < arreglo.length ; indice ++ ){
        if(funcion(arreglo[indice], indice, arreglo)){
            elementoEncontrado = arreglo[indice];
        };
    }
    return elementoEncontrado;
}

const respuestaFind = find([1,2,3,4,5,6,7],
    (valor)=> {
        return valor === 4;
    });

console.log('Find',respuestaFind);


function findIndex(arreglo, funcion) {
    let  elementoEncontrado;

    for (let indice = 0 ; indice < arreglo.length ; indice ++ ){
        if(funcion(arreglo[indice], indice, arreglo)){
            elementoEncontrado = arreglo[indice];
        };
    }
    return arreglo.indexOf(elementoEncontrado);
}

const respuestaFindIndex = findIndex([1,2,3,4,5,6,7],
    (valor)=> {
        return valor === 4;
    });

console.log('FindIndex',respuestaFindIndex);




function reduce(arreglo, funcion, acumulador){

      for (let indice=0; indice <arreglo.length; indice ++){
        acumulador = funcion(acumulador, arreglo[indice])

    }
    return acumulador;
}


const respuestaReduce = reduce([1,2,3],
    (acumulador, valor)=> {
        return acumulador + valor;
    },100);

console.log('Reduce : ',respuestaReduce);





