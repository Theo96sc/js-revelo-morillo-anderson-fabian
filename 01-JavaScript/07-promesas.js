const fs = require('fs');

const sumarDosNumeros = (correcto) => {

    return new Promise(
        (resolve, reject) => {

            if (correcto) {
                resolve('YeII');
            } else {
                reject('BUU');
            }
        }
    );
};

const promesaSumarDosNumeros = sumarDosNumeros(true);

promesaSumarDosNumeros
    .then(ok => {
            console.log(ok);
        }
    )
    .catch(error => {
            console.log('Error', error);
        }
    );
console.log('2 terminar');

const leerArchivo = (pathArhivo) => {
    return new Promise(
        (resolve, reject) => {
            // res -> resolve, rej -> reject

            fs.readFile(
                pathArhivo,
                'utf8',
                (error, archivoLeido) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(archivoLeido);
                    }
                }
            );
        }
    )
};


const promesaLeer = leerArchivo('./05-callbacks.js');
promesaLeer
    .then(
        contenido => {
            //  console.log(contenido);
            return leerArchivo('./04-funciones.js') // Promesa
        }
    )
    .then(
        (contenidoFunciones) => {
            //console.log(contenidoFunciones);
        }
    )
    .catch(
        error => {
            // console.log('ErrorJS', error);
        }
    );

console.log('inicia sincrono')

/*

// Cuadno se use codigo js y se estikzando una funcin sincrona se tiene que usar un bloque try chatch
try {
    const contenidoArchivo = fs.readFileSync(
        archivo,
        'utf-8');
    console.log('Se leyo el archivo sincronamente')
} catch (error) {
    console.error(error)
}
console.log('termina sincrono');

 */

const nombreArchivo = './04-funciones.js';

/// transforma una promesa a codifo SINCRONO !!! se necesita una funcion normal o una funcion anonima
// paso 1 : poner la palabra async que permite usar codigo sicrono dentro de la funcion
// paso 2 : para transformar PROMESA -> Sincrono se usa "await"

// el await permite que tu codigo se ejecute linea por linea.

async function leerArchivoSync() {
    try {
        const contenido = await leerArchivo(nombreArchivo); // Promesa
        console.log(contenido);
        console.log('Leimos con ASYNC y await')
        return 1;
    } catch (error) {
        console.error('ErrorKK', error);
        return 0;
    }
}

//toda funcion que tenga la palabra await se comvierte en promesa

leerArchivoSync()
    .then(
        numero => {
            console.log(numero);
        }
    ).catch(
    numero => {
        console.log(numero);
    }
);


// TBN SE PUEDE HACER
/*
const lraa= async()=>{
}

 */

