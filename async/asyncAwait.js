async function hi(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`hi ${name}`);
            resolve(name);
        }, 1500);
    });
}

async function speak(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('bla bla bla...');
            // resolve(name);
            resolve('Ups.. an error has ocurred');
        },1000)
    });
}

async function bye(name) {
    return new Promise((resolve, reject) => {
        console.log(`bye ${name}`);
        resolve()
    },1000);
}

// --
async function main() {
    let name = await hi("Daniel");
    await speak();
    speak();
    speak();
    await speak();
    await bye(name);
}

console.log("Empezamos el proceso...");
main();