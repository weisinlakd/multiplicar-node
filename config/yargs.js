

const opciones = {
    base: {
    demand: true,
    alias: 'b',
        },
    limite: {
    demand: false,
    alias: 'l',
    default: 10,
        }
}

const argv = require('yargs')
                .command('listar', "Imprime en consola la tabla", opciones)
                .command('crear', "Crea en un archivo la tabla", opciones)
                .help()
                .argv;

module.exports = {
    argv
}