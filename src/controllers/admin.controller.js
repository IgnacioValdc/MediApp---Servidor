
const {response} = require('express');
const bcryptjs = require('bcryptjs');
const { client } = require('../database/conexionDB');


const listaradmin = async(req, res = response) => {
    const administradores = await client.query(`select nombre, email from usuarios`)
    const admin = administradores.rows;
    if(admin.length === 0){
        return res.status(400).json({
            msg: 'No hay administradores disponibles'
        })
    }
    // console.log(admin)
    res.json({
        admin
    })
}

const crearUsuario = async(req,res = response) => {
    const {nombre, correo, password} = req.body;

    const salt = bcryptjs.genSaltSync();
    const hash = bcryptjs.hashSync(password,salt);

    try {
        await client.query(`INSERT INTO public.usuarios(
            nombre, email, pass)
            VALUES ( '${nombre}', '${correo}', '${hash}');`)
    
        res.json({
            msg: 'Usuario creado con exito',
        })
    } catch (error) {
        console.error("Ha ocurrido un error", error)
    }
}

module.exports = {crearUsuario, listaradmin}