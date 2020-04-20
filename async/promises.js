
function hi(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`hi ${name}`);
            resolve(name);
        }, 1500);
    });
}

function speak(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla bla bla...');
            // resolve(name);
            reject("Ups.. there's an error");
        },1000)
    });
}

function bye(name) {
    return new Promise((resolve, reject) => {
        console.log(`bye ${name}`);
        resolve()
    },1000);
}

// --

console.log('Starting process...');

hi("Daniel")
    .then(speak)
    .then(bye)
    .then(() => {
        console.log('Process completed...');
    })
    .catch(error => {
        console.error("An error has ocurred >=|");
        console.log(error);
    });