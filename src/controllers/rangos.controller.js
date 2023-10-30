const {response} = require('express');
const { client } = require('../database/conexionDB');




const listarRangos = async(req,res = response) => {

    const {id} = req.params
    const rangosQuery = await client.query(`SELECT idrango FROM rangos WHERE '${id}' BETWEEN inicio AND fin;`)
    const rangos = rangosQuery.rows

    if(rangos === 0){
        return res.status(400).json({
            msg: 'No se encontraron rangos registrados'
        })
    }

    res.json({
        rangos
    })
}

module.exports = {listarRangos}
