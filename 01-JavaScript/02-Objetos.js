
const numeros = [1,2,3,4,5,6,7,8,9,10];
console.log(numeros);
numeros[10]=11;
numeros.push(12);
console.log(numeros);

numeros[1]=45;
console.log(numeros);

let arregloNumeros = [1,4,3,4,5,6,7,8,9];
/*
arregloNumeros = ["a","b","c","d"];
console.log(arregloNumeros);
arregloNumeros = ["a",1,1.2,false,true, 0]
console.log(arregloNumeros);

arregloNumeros.pop();
// sacar el ultimo
console.log('se quito el 0',arregloNumeros);*/

arregloNumeros.splice(1,0,1.1);
console.log(arregloNumeros);
arregloNumeros.unshift(0); // insertar al inicio
console.log(arregloNumeros);
const indice = arregloNumeros.indexOf(4);
console.log(indice);

arregloNumeros.splice(indice,1);
console.log(arregloNumeros);








/*
function suma(a,b){
    if(typeof a === "number" && typeof b === "number"){
        return a + b;
    }else {
        throw new Error("Error")
       // console.log("no son numeros")
    }
}
console.log(suma(1, 3))
arregloNumeros = 1;
console.log('Peligro arregloNumeros dejo de ser un arreglo', arregloNumeros);
*/


