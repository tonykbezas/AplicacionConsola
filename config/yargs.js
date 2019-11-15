let opt = {
    archivo:{
        demand: true,
        alias:`f`,
        description: `La ruta del archivo csv`
    },
    pais:{
        alias:`c`,
        default: 'ECU',
        description: 'Permite determinar el país a analizar a través de su código'
    },
    anio:{
        alias:`y`,
        default: 1960,
        description: 'Permite especificar el año para el cual se requiere las estadísticas. Por defecto, 2018.'
    }
}

const argv = require('yargs')
.command('mostrar','Este comando imprime en pantalla el resultado de la búsqueda',opt)
.command('guardar','Este comando genera un archivo de texto con el resultado de la búsqueda',opt)
.help()
.argv;


module.exports = {
    argv
};