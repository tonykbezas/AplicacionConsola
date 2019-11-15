const {argv} = require('./config/yargs.js')

const{mostrar,guardar} = require('./buscador/buscar.js');

let comando = argv._[0]
console.log(comando)
switch(comando){
    case 'mostrar':
        mostrar(argv.archivo,argv.pais,argv.anio)
            .then(console.log(argv.archivo,argv.pais,argv.anio))
            .catch(e => console.log(e));
        break;
    case 'guardar':
        guardar(argv.archivo,argv.pais,argv.anio)
            .then(console.log('Listado'))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no valido!')
};