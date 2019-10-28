// js no puede levantar más hilos

const fileSystem = require('fs');
console.log('1 - iniciando');


fileSystem.readFile(
    './05-callbacks.js',
    'utf8',
    (error, datos)=>{
        if (error) {
            console.error({
                mensake: 'error leyendo archivos',
                //error : error, esto es iguala los de arribov
                error,
            })

        } else {
            console.log('Datos: ', datos);
            fileSystem.readFile(
                './04-funciones.js',
                'utf8',
                (error, datos)=> {
                    if (error) {
                        console.error({
                            mensake: 'error leyendo archivos',
                            //error : error, esto es iguala los de arribov
                            error,
                        })
                        return true;
                    } else {
                        console.log('Datos: ', datos);
                        return false;
                    }
                    console.log('3 - leyendo el archivo');
                }

            )

        }

    }



);





console.log('2 - finalizando');


function callBackLeerArchivo(error, datos) {
    if (error) {
        console.error({
            mensake: 'error leyendo archivos',
            //error : error, esto es iguala los de arribov
            error,
        })
        return true;
    } else {
        console.log('Datos: ', datos);
        return false;
    }
    console.log('3 - leyendo el archivo');
}


