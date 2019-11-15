const fs = require('fs');
let guardar = (file,country,year) => {
    return new Promise((resolve, reject) => {
        if (!Number(year)){
            reject(`Valor ${year} no es numero`)
            return;
        }
        let data = '';
        const csv = require('csv-parser');
        const fs = require('fs');
        fs.createReadStream(`${file}`)
        .pipe(csv())
        .on('data', (row) => {
            if(row[1] === country){
                data = `Datos: ${row[2]}\n Pais: ${row[0]}\n Año: ${year}\n Valor: ${row[39]}`;
            }
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
        }); 
        fs.writeFile(`resultados/${country}-${year}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else
                resolve(`${country}-${year}.txt`);
        });
    })
}
let mostrar = (file,country,year) => {
    return new Promise((resolve, reject) => {
        if (!Number(year)){
            reject(`Valor ${year} no es numero`)
            return;
        }
        const csv = require('csv-parser');
        const fs = require('fs');
        fs.createReadStream(`${file}`)
        .pipe(csv())
        .on('data', (row) => {
            if(row[1] === country){
                console.log(`Datos: ${row[2]}\n Pais: ${row[0]}\n Año: ${year}\n Valor: ${row[39]}`)
            }
            resolve(row);
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
        });
    })
}

module.exports = {
    guardar,
    mostrar
};