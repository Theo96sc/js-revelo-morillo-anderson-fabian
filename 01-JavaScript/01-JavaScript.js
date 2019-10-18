// JSON
// var nombre = "Anderson"

let nombre = "Anderson";
//nombre = "Fabian"
nombre = 1;

// no cambia
const cedula = 1232423524;
const mensaje = `
Siempre usar "const"
Si ya toca usar "let"
Nunca Usar "var"`;


let nombre2 = "Anderosn"
console.log(typeof nombre2, 'nombre2');

let numero = 1
console.log(typeof numero, 'numero');

let numeros = 1.1;
console.log(typeof numeros, 'numeros');

let casado = false;
console.log(typeof casado, 'casado');

let hijos = null;
console.log(typeof hijos, 'hijos');

let mascotas = [];
console.log(typeof mascotas, 'mascotas');
let hermana = {};
console.log(typeof hermana, 'hermana');

// Condicion
// Truty
// Falsy

if (-1) {
    console.log(" -1 truty")
} else {
    console.log(" -1 Falsy")
}

// JSON

const anderson = {
    "nombre": 'Anderson',
    'apellido': "Revelo",
    edad: 10,
    casado: false,
    hijos: null,
    hermana: {
        nombre: "Milena"
    },
    mascotas: [
        {
            nombre: "Vito"
        }
    ]
}

console.log(anderson.nombre);
console.log(anderson.hermana);
console.log('leer datos :...', anderson.mascotas[0].nombre);

// agregar otro objeto
anderson.sueldo = 1.2;
anderson["deudas"] = 1000;

console.log(anderson);
// eliminar propiedades en un objeto JS
delete anderson.hijos;
console.log(anderson);




