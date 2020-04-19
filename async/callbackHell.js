
function hola(nombre, miCallback) {
    setTimeout(() => {
        console.log(`Hola ${nombre}`)
        miCallback(nombre);
    }, 1500);
}

function hablar(callbackHablar) {
    setTimeout(() => {
        console.log("bla bla bla...");
        callbackHablar();
    }, 100);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`Adiós ${nombre}`);
        otroCallback();
    },1000);
}

function conversacion(nombre, veces, callback) {
    hablar(() => {
        if(veces > 0) {
            conversacion(nombre, --veces, callback);
        } else {
            adios(nombre, callback);
        }
    })
}
// --

console.log('Iniciando proceso...');

hola("Daniel", nombre => conversacion(nombre, 3, () => {console.log("Proceso terminado...")}));

// hola("Daniel", (nombre) => {
//     hablar(() => {
//         hablar(() => {
//             hablar(() => {
//                 adios(nombre, () =>{
//                     console.log('Terminando proceso...');
//                 });
//             });
//         });
//     });
// });