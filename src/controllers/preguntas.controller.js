const {request,response} = require('express');
const { client } = require('../database/conexionDB');



const listarPreguntas = async(req = request,res = response) => {
    const {activo = 'true'} = req.params
    var queryPreguntas;

    if(activo === 'true'){
        queryPreguntas = await client.query(`select idpregunta, pregunta, opcion_1, opcion_2, opcion_3 from preguntas where activa = true`)
    }else{
        queryPreguntas = await client.query(`select idpregunta, pregunta, opcion_1, opcion_2, opcion_3 from preguntas`)
    }

    const preguntas = queryPreguntas.rows;
    if(preguntas.length === 0){
        return res.status(200).json({
            msg: 'No se encontraron resultados'
        })
    }

    res.json({
        preguntas
    })
}

const individualPregunta = async(req = request, res = response) => {
    const {id} = req.params
    console.log(typeof(id))
    var queryPreguntas = await client.query(`select idpregunta, pregunta, opcion_1, opcion_2, opcion_3 from preguntas where idpregunta = '${id}'`)

    const pregunta = queryPreguntas.rows;
    console.log(pregunta)
    if(pregunta.length === 0){
        return res.status(200).json({
            msg: 'No se encontraron resultados'
        })
    }

    res.json({
        pregunta
    })

}

const crearPregunta = async(req = request, res = response) => {
    const {pregunta, opcion_1,opcion_2,opcion_3} = req.body;

    await client.query(`INSERT INTO public.preguntas(
        pregunta, opcion_1, opcion_2, opcion_3, activa)
        VALUES ('${pregunta}', '${opcion_1}', '${opcion_2}', '${opcion_3}', true);`)
    
        res.json({
            msg: 'Pregunta creada exitosamente'
        })
}


const actualizarPregunta = async(req = request,res = response) => {
    const {id} = req.params;
    const {_id,pregunta,opcion_1,opcion_2,opcion_3} = req.body
    // console.log(id)

    const updates = []

    if(pregunta){
        updates.push(`pregunta='${pregunta}'`)
    }

    if(opcion_1){
        updates.push(`opcion_1='${opcion_1}'`)
    }

    if(opcion_2){
        updates.push(`opcion_2='${opcion_2}'`)
    }

    if(opcion_3){
        updates.push(`opcion_3='${opcion_3}'`)
    }

    if(updates.length > 0){
        const cambios = updates.join(', ')

        const query = `update preguntas set ${cambios} where idpregunta = '${id}'`

        await client.query(query);
    }

    res.json({
        msg: 'Actualizacion exitosa'
    })
}

const activarPregunta = async(req = request, res = response) => {
    const {id} = req.params

    await client.query(`update preguntas set activa = true where idpregunta = '${id}'`)

    res.json({
        msg: 'Actualización exitosa'
    })
}

const eliminarPregunta = async(req = request, res = response) => {
    const {id} = req.params

    await client.query(`update preguntas set activa = false where idpregunta = '${id}'`)

    res.json({
        msg: 'Eliminación exitosa'
    })
}

module.exports = {
    listarPreguntas,
    crearPregunta,
    actualizarPregunta,
    activarPregunta,
    eliminarPregunta,
    individualPregunta
}