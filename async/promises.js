
function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Hola ${nombre}`);
            resolve(nombre);
        }, 1500);
    });
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla bla bla...');
            // resolve(nombre);
            reject('Ups.. hay un error');
        },1000)
    });
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        console.log(`Adios ${nombre}`);
        resolve()
    },1000);
}

// --

console.log('Iniciando proceso...');

hola("Daniel")
    .then(hablar)
    .then(adios)
    .then(() => {
        console.log('Terminando el proceso...');
    })
    .catch(error => {
        console.error("Ha habido un error >=|");
        console.log(error);
    });