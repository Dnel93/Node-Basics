
function hi(name, myCallback) {
    setTimeout(() => {
        console.log(`hi ${name}`)
        myCallback(name);
    }, 1500);
}

function bye(name, anotherCallback) {
    setTimeout(() => {
        console.log(`Bye ${name}`);
        anotherCallback();
    },1000);
}

console.log('Starting process...');

// hi("Daniel", () => {});
// bye("Daniel", () => {});

hi("Daniel", (name) => {
    bye(name, () =>{
        console.log('Process completed...');
    })
});