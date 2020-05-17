console.time('todo');

let suma = 0;

console.time("init");
for(let i = 0; i < 100000000; i++) {
    suma++;
}
console.timeEnd('init');

let suma2 = 0;

console.time("init2");
for(let j = 0; j < 1000000000; j++) {
    suma2++;
}
console.timeEnd('init2');

console.time('Asíncrono');

console.log('Empieza el proceso asíncrono')
asincrona().then(() => {
    console.timeEnd('Asíncrono');
});

console.timeEnd('todo');

function asincrona() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Termina el proceso asíncrono');
            resolve();
        }, 5000)
    })
}