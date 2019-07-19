const {crearArchivo} = require('../03-bases/multiplicar/multiplicar.js');
const argv = require('./config/yargs.js').argv;
const colors = require('colors');                



let comando = argv._[0];


switch (comando) {
    case "listar":
            console.log(comando)
            listarTabla(argv.base, argv.limite);
        break;
    case "crear":
            console.log(comando)
            crearArchivo(argv.base, argv.limite)
                .then( archivo => console.log(`Archivo creado:`+ colors.green(archivo)))
                .catch(err => {console.error(err)})
        break;
    default: 
        console.log("no está wacho");
        break;
}



// console.log(argv.base);
// console.log(argv.limite)

