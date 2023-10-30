const {request,response} = require('express');
const { client } = require('../database/conexionDB');


const listarProfesionales = async(req, res = response) => {

    const {activo = 'true'} = req.params
    var queryProfesionales;
    if(activo === 'true'){
        queryProfesionales = await client.query(`select pr.idprofesional, pr.nombre, pr.especialidad, r.nombre as rango from profesionales pr inner join rangos r on pr.idrango = r.idrango where activa = true`)
    }else{
        queryProfesionales = await client.query(`select pr.idprofesional, pr.nombre, pr.especialidad, r.nombre as rango from profesionales pr inner join rangos r on pr.idrango = r.idrango`)
    }

    profesionales = queryProfesionales.rows;

    if(profesionales.length === 0){
        return res.status(400).json({
            msg: 'No hay registros de profesionales'
        })
    }
    res.json({
        profesionales
    })
}

const listarProfesional = async(req,res = response) => {
    const {id} = req.params;

    const queryProfesionales = await client.query(`select pr.idprofesional, pr.nombre, pr.especialidad, idrango from profesionales pr where idprofesional = '${id}'`)

    profesional = queryProfesionales.rows;

    if(profesional.length === 0){
        return res.status(400).json({
            msg: 'Profesional no encontrado'
        })
    }

    res.json({
        profesional
    })
}

const listarrangoProfesional = async(req,res = response) =>{
    const {id} = req.params;
    const queryProfesionales = await client.query(`select pr.idprofesional, pr.nombre, pr.especialidad, idrango from profesionales pr where idrango = '${id}' and activa = true`)

    profesional = queryProfesionales.rows;

    if(profesional.length === 0){
        return res.status(400).json({
            msg: 'Profesional no encontrado'
        })
    }

    res.json({
        profesional
    })
}

const crearProfesional = async(req,res = response) => {
    const {nombre, especialidad, rango} = req.body;

    try {
        await client.query(`INSERT INTO public.profesionales(
            nombre, especialidad, activa, idrango)
            VALUES ('${nombre}','${especialidad}' , '${true}', '${rango}');`)
    
        res.json({
            msg: 'Profesional creado con exito',
        })
    } catch (error) {
        console.error("Ha ocurrido un error", error)
    }
    
}

const actualizarProfesional = async(req = request,res = response) => {
    const {id} = req.params;
    const {_id,nombre,especialidad,activa,idrango} = req.body

    const updates = []

    if(nombre){
        updates.push(`nombre='${nombre}'`)
    }

    if(especialidad){
        updates.push(`especialidad='${especialidad}'`)
    }

    if(activa){
        updates.push(`activa='${activa}'`)
    }

    if(idrango){
        updates.push(`idrango='${idrango}'`)
    }

    if(updates.length > 0){
        const updateClause = updates.join(', ')

        const query = `update profesionales set ${updateClause} where idprofesional = '${id}'`

        await client.query(query);
    }

    res.json({
        msg: 'Actualizacion exitosa'
    })
}

const activarProfesional = async(req,res) => {
    const {id} = req.params;
    await client.query(`update profesionales set activa = true where idprofesional = '${id}'`)

    res.json({
        msg: 'Profesional activado'
    })
}

const eliminarProfesional = async(req,res) => {
    const {id} = req.params;
    await client.query(`update profesionales set activa = false where idprofesional = '${id}'`)

    res.json({
        msg: 'Profesional eliminado'
    })
}

module.exports = {
    listarProfesionales,
    crearProfesional,
    actualizarProfesional,
    eliminarProfesional,
    activarProfesional,
    listarProfesional,
    listarrangoProfesional
}