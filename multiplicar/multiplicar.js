//require para crear fs
const fs = require('fs');

const color = require('colors');

let listar = (base, limite) => {
    console.log('=========');
    console.log(`Tabla del ${base}`.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i} `);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {


        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${i} * ${base} = ${i * base} \n`;
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`Tabla-${base}.txt`)

        });
    })
}


module.exports = {
    crearArchivo,
    listar
}