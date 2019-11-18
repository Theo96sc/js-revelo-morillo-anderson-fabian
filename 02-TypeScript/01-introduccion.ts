/// Transpilador
/*
Tipo de compilador que transforma de un lenguaje a otro

TYPESCRIPT
nos da:
1) Tipos de Datos (Tipados)
2) Decoradores
Un decorador ejecuta una funcion antes de una cosa.
3) Clases
 */


// tipos de datos

const numero : number = 0;
//let nombre : string = "Anderson";

// DUCK TYPING
// INFIRIENDO EL TIPO DE DATO
let nombre = "Anderson";
// nombre = 1; ERROR

let fecha: Date; // Date -> Clase
                // Tipo de dato "Date"

fecha = new Date();

let anderson : Estudiante; // Estudiante -> Interfaz
                            // Tipo de datos "Estudiante"

anderson = {
    nombre: "Anderson",
    edad: 12
}

interface Estudiante{
    nombre: string;
    edad?: number;
}



function holaMundo(): void {
    console.log('Hola');
}
function mensaje(nombre:string): void  {
    console.log('Hola',nombre);
}
function calculadora(
    numUno: number,
    ...numeros: number[]
): number {
    console.log('Hacer Calculadora');
    return numUno;
}
function universidad(
    nombre: string,
    edad?: number // Opcional
) : string {
    return `Nombre: ${nombre} edad: ${edad}`;

}

universidad("Anderson",2)
universidad("Anderson")

// porque es necesario tipar los datos, en el trabajo. para reducir errores del programador.


interface Facultad{
    nombre: string;
    id: number;
}


interface Departamento {
    nombre: string;
    id: number;
    facultad: Facultad | number;

}


const departamentoSistemas = {
    nombre: "Sistemas",
    id:1,
    facultad : { // Facutad esta relacionada
        nombre: "Sistema",
        id:1,
    }
}


const departamentoSistemasSinRealciones: Departamento = {
    nombre: "Sistemas",
    id:1,
    facultad : 1
};

function imprimirDepartamento(
    departamento: Departamento
){
    //TIPOS DE CASTEO

    //const departamentoId = departamento.facultad as number +1;
    const departamentoId = <number>departamento.facultad +1;
}
