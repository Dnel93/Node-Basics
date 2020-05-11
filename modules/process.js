// const process = require('process');

process.on('beforeExit', () => {
    console.log('El proceso va a terminar...');
});

process.on('exit', () => {
    console.log('Ale, el proceso acabó');
    setTimeout(() => {
        console.log('Esto nunca se va a ejecutar')
    }, 0);
});

process.on('uncaughtException', (err, origen) => {
    console.error('Vaya... se nos ha olvidado capturar un error');
    console.error(' ---> ' + err.message);
});

setTimeout(() => {
    console.log('Esto se va a ejecutar')
}, 1000);

// funcionQueNoExiste();
// console.log('Si ocurre un error, esto no se ejecuta')

// process.on('uncaughtRejection');