
function hi(name, myCallback) {
    setTimeout(() => {
        console.log(`hi ${name}`)
        myCallback(name);
    }, 1500);
}

function speak(callbackspeak) {
    setTimeout(() => {
        console.log("bla bla bla...");
        callbackspeak();
    }, 100);
}

function bye(name, anotherCallback) {
    setTimeout(() => {
        console.log(`Bye ${name}`);
        anotherCallback();
    },1000);
}

function conversation(name, times, callback) {
    speak(() => {
        if(times > 0) {
            conversation(name, --times, callback);
        } else {
            bye(name, callback);
        }
    })
}
// --

console.log('Starting process...');

hi("Daniel", name => conversation(name, 3, () => {console.log("Process finished...")}));

// hi("Daniel", (name) => {
//     speak(() => {
//         speak(() => {
//             speak(() => {
//                 bye(name, () =>{
//                     console.log('Terminando proceso...');
//                 });
//             });
//         });
//     });
// });