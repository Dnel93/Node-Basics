const fs = require("fs");

function leer(ruta, cb) {
    fs.readFile(ruta, (error, data) => {
        console.log(data.toString());
    })
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, (error) => {
        if(error) {
            console.error("No se pudo escribir el archivo", error);
        } else {
            console.log("El archivo se ha creado correctamente");
        }
    });
};

function borrar(ruta, cb) {
    fs.unlink(ruta, cb);
}

leer(__dirname + '/archivo.txt');
escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
borrar(__dirname + '/archivo1.txt', console.log);