function otraFunction() {
    return seRompe();
}

function seRompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch(err) {
            console.error("Error en mi función asíncrona: ", err.message);
            cb(err);
        }
    })
}

try {
    // otraFunction();
    seRompeAsincrona(() => {
        console.log('Hay error');
    })
} catch(err) {
    console.error('Vaya, algo se ha roto...')
    console.error(err.message);
    console.log('Pero no pasa nada... lo hemos capturado');
;}

console.log('Esto de aquí es el final.');