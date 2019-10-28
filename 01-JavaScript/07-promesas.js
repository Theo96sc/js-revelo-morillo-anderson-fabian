const fs = require('fs');

const sumarDosNumeros = (correcto) => {

    return new Promise(
        (resolve, reject) => {

            if(correcto){
                resolve('YeII');
            }else{
                reject('BUU')
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

const leerArchivo = (pathArhivo)=> {
    return new Promise(
        (resolve,reject)=>{
            // res -> resolve, rej -> reject

            fs.readFile(
                pathArhivo,
                'utf8',
                (error, archivoLeido) => {
                    if(error){
                        reject(error);
                    }else{
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
        res => {
            console.log(res);
            return leerArchivo('./056-funciones.js') // Promesa
        }
)
.then(
    (contenidoFunciones)=> {
        console.log(contenidoFunciones);
    }
)
.catch();