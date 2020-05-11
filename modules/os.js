const os = require('os');

console.log(os.arch()); // x64 or x32
console.log(os.platform()); // linux, darwin, etc..
console.log(os.cpus()); // Datos de los nucleos
// console.log(os.constants);

// memoria ram disponible
const SIZE = 1024;
function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }

console.log(os.freemem() + " bytes");
console.log(kb(os.freemem()) + " kb");
console.log(mb(os.freemem()) + " mb");
console.log(gb(os.freemem()) + " gb");

console.log(mb(os.totalmem())); // RAM total

console.log(os.homedir());
console.log(os.tmpdir());

console.log(os.hostname());
console.log(os.networkInterfaces());