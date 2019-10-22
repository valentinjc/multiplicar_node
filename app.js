const argv = require('./config/yargs').argv;
const color = require('colors');

const { crearArchivo, listar } = require('./multiplicar/multiplicar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado ' + color.red(archivo)))
            .catch(e => console.log(e))
        break;
    default:
        console.log('Comando no reconocido');
}

//let parametro = argv[2];
//let base = split(parametro)
//console.log(parametro);