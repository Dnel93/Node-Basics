let i = 0;
let intervalo = setInterval(() => {
    if(i === 3) {
        clearInterval(intervalo);
    }
    i++;
    console.log("hola");
},2500);

setImmediate(() => {
    console.log("Inmediato");
})
/**
 * * Modules
 * ----------------------------
 * * process
 * * __dirname
 * * __filename
 */

global.miVariable = "ElValor";

console.log(miVariable); // try to avoid global variables