const {exec, spawn} = require('child_process');

// exec('ls -la', (error, stdout, sterr) => {
//     if(error) {
//         console.error(error);
//         return false;
//     }

//     console.log(stdout);
// });

let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (dato) => {
    console.log('Está muerto?',proceso.killed);
    console.log(dato.toString());
});


proceso.on('exit', () => {
    console.log('El proceso ha terminado');
    console.log(proceso.killed);
})