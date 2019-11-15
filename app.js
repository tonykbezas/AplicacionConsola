const {argv} = require('./config/yargs.js')

const{publicar,guardar} = require('./archivos/metodos.js');

let comando = argv._[0]
console.log(comando)
switch(comando){
    case 'publicar':
        publicar(argv.file,argv.country,argv.year)
            .then(console.log(argv.year,argv.country,argv.file))
            .catch(e => console.log(e));
        console.log(module);
        break;
    case 'guardar':
        guardar(argv.file,argv.country,argv.year,argv.out)
            .then(console.log('Listado'))
            .catch(e => console.log(e));
        console.log(module);
        break;
    default:
        console.log('Comando no valido!')
};