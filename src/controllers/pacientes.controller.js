const {response} = require('express');
const { client } = require('../database/conexionDB');
const bcryptjs = require('bcryptjs');


const login = async(req,res = response) => {

    const {correo,password} = req.body;

    const usuarioQuery = await client.query(`select idpaciente, email, pass from pacientes where email = '${correo}'`)

    const usuario = usuarioQuery.rows;
    if(usuario.length === 0){
        return res.status(400).json({
            msg: 'Usuario y/o contraseña invalido'
        })
    }
    
    const {idpaciente, email, pass} = usuario[0];
    // console.log(idpaciente)
    const validarPassword = bcryptjs.compareSync(password,pass)
    if(!validarPassword){
        return res.status(400).json({
            msg: 'Usuario y/o contraseña invalido'
        })
    }
    
    res.json({
        msg: 'Login - ok',
        authenticated: true,
        idpaciente
    })
} 


const listarPaciente = async(req,res = response) => {
    const {id} = req.params;

    const queryPaciente = await client.query(`select idpaciente, nombre, pass, ciudad, email from pacientes where idpaciente = '${id}'`)

    const paciente = queryPaciente.rows;
    console.log(paciente)
    if(paciente.length === 0){
        return res.status(400).json({
            msg: 'Paciente no encontrado'
        })
    }

    res.json({
        paciente
    })
}

const resumenPacientes = async(req,res = response) => {
    const queryPacientes = await client.query(`select p.nombre as NombrePaciente, pr.nombre as NombreProfesional from asignacion a inner join pacientes p on a.idpaciente = p.idpaciente inner join profesionales pr on a.idprofesional = pr.idprofesional`)

    const pacientes = queryPacientes.rows;
    
    if(pacientes.length === 0){
        return res.status(200).json({
            msg: 'No hay registro de pacientes'
        })
    }
    res.json({
        pacientes
    })
}

const crearPaciente = async(req,res = response) => {
    const {nombre,pass,ciudad,correo} = req.body;

    const salt = bcryptjs.genSaltSync();
    const hash = bcryptjs.hashSync(pass,salt);

    try {
        await client.query(`INSERT INTO public.pacientes(
            nombre, pass, ciudad, email)
            VALUES ( '${nombre}', '${hash}', '${ciudad}','${correo}');`)
    
        res.json({
            msg: 'Paciente creado con exito',
        })
    } catch (error) {
        console.error("Ha ocurrido un error", error)
    }
}

const asignarProfesional = async(req,res) => {
    const {idpaciente,puntaje,idprofesional} = req.body;

    try {
        await client.query(`INSERT INTO public.asignacion(
            idpaciente, puntaje, idprofesional)
            VALUES ( '${idpaciente}', '${puntaje}', '${idprofesional}');`)
    
        res.json({
            msg: 'Paciente asignado con exito',
        })
    } catch (error) {
        console.error("Ha ocurrido un error", error)
    }

}

const actualizarPaciente = async(req = request,res = response) => {
    const {id} = req.params;
    const {_id,nombre,pass,ciudad,correo} = req.body
    console.log(id)

    const updates = []

    if(nombre){
        updates.push(`nombre='${nombre}'`)
    }

    if(especialidad){
        updates.push(`pass='${pass}'`)
    }

    if(activa){
        updates.push(`ciudad='${ciudad}'`)
    }

    if(idrango){
        updates.push(`email='${correo}'`)
    }

    if(updates.length > 0){
        const updateClause = updates.join(', ')

        const query = `update pacientes set ${updateClause} where idpaciente = '${id}'`

        await client.query(query);
    }

    res.json({
        msg: 'Actualizacion exitosa'
    })
}

module.exports = {
    resumenPacientes,
    actualizarPaciente,
    crearPaciente,
    asignarProfesional,
    login,
    listarPaciente
}