const fs = require('fs');
const colors = require('colors');  


listarTabla = (base, limite) => {


    console.log('=========================='.random)
    console.log(`===TABLA DE ${ base} HASTA ${ limite}===`)
    console.log('=========================='.random)

    for (let i=1; i<=limite; i++){

        console.log(`${base} * ${i} = ${base*limite}`.green);

    }
}

crearArchivo = (base, limite) => {

    return new Promise( (resolve, reject) => {

        if (!Number(base)){
            reject(base + " no es número");
            return
        }
        let data = "";
        for(let i =1; i <= limite; i++){
            data += `${base} * ${i} = ${base*i}\n`
        }


        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            
                if (err) reject(err);
                else resolve(`tabla-${base}.txt`);


            // console.log( `El archivo tabla-${base}.txt se creó.`);
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}


