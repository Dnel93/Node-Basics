let i = 0;
let interval = setInterval(() => {
    if(i === 3) {
        clearInterval(interval);
    }
    i++;
    console.log("hi");
},2500);

setImmediate(() => {
    console.log("inmediate");
})
/**
 * * Modules
 * ----------------------------
 * * process
 * * __dirname
 * * __filename
 */

global.myVariable = "Value";

console.log(myVariable); // try to avoid global variables