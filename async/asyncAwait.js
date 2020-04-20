async function hola(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Hola ${nombre}`);
            resolve(nombre);
        }, 1500);
    });
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla bla bla...');
            // resolve(nombre);
            resolve('Ups.. hay un error');
        },1000)
    });
}

async function adios(nombre) {
    return new Promise((resolve, reject) => {
        console.log(`Adios ${nombre}`);
        resolve()
    },1000);
}

// --
async function main() {
    let nombre = await hola("Daniel");
    await hablar();
    hablar();
    hablar();
    await hablar();
    await adios(nombre);
}

console.log("Empezamos el proceso...");
main();