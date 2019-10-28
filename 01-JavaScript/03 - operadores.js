const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
/*
for (const i in arreglo){ // muestra Indices
    console.log('I:', i);
}

for (const i of arreglo){ // muestra Valores
    console.log('I:', i);
}*/


const respuestaForEach = arreglo
    .forEach(
        function (valorActual, index, array) {
            console.log('valor', valorActual);

            // console.log('indice',indiceActual)
            // console.log('arreglo',arreglo)
        });

/*
for (const i in arreglo) {
    arreglo[i]= arreglo[i]+5;
}*/
// AND -> EVERY
// OR -> SOME

const respuestaMap = arreglo
    .map( // trasnforma --> Mutar el arreglo
        function (valor, index, array) {
            return valor + 5;
        }// devuelve un nuevo arrreglo
    );

const respuestaFilter = arreglo.filter(
    value => {
        console.log('cumple', value > 7);
        return value > 7
    }// devolver -> Expresion -> truty y falsy
); // Nuevo arreglo

const respuestaSome = arreglo.some(
    valor => {
        return valor > 9 && valor < 11
    }
); // true o false

const respuestaEvery = arreglo.every(
    value => {
        return value > 1;
    }
); // true o false

const map2 = arreglo.map(valor => valor + 5);
console.log('forEach', respuestaForEach);
console.log('MAP', respuestaMap);
console.log('MAP2', map2);
console.log('original', arreglo);
console.log('filter', respuestaFilter);
console.log('some', respuestaSome);
console.log('every', respuestaEvery);

//Para todos los valores del arreglo sumar 5


// que numeros son divisibles para 2 y menor o igual a 10


const respuestaMenoresADiez = arreglo.map(
    value => (value / 2) + 7
).filter(
    value => value < 10
);

console.log('xxxxxxxxx', respuestaMenoresADiez);

// operdor de busqueda

const respuestaFind = arreglo.find(
    (valor, indice, arreglo) => {
        return valor === 8;
    }
); // devuelve el elemento

const respuestaFindIndex = arreglo.findIndex(
    (valor) => {
        return valor === 8;
    }
);

console.log('respuestaFind', respuestaFind);
console.log('FindIndex', respuestaFindIndex);


// quieri la suma de todos los valores de un arreglo

const respuestaReduce = arreglo.reduce(
    (valorInicial, valorActual, indice, array) => {
        return valorInicial + valorActual;

    }, 0);

console.log('REDUCE',respuestaReduce);


const hits = arreglo.reduce(
    (valorInicial, valorActual)=>{
        return valorInicial- valorActual;
    },100
);
console.log(hits);
