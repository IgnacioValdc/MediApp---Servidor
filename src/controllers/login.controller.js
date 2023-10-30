const {response} = require('express');
const bcryptjs = require('bcryptjs');
const {client} = require('../database/conexionDB.js')

const login = async(req,res = response) => {

    const {correo,password} = req.body;

    const usuarioQuery = await client.query(`select email, pass from usuarios where email = '${correo}'`)

    const usuario = usuarioQuery.rows;
    if(usuario.length === 0){
        return res.status(400).json({
            msg: 'Usuario y/o contraseña invalido'
        })
    }

    const {email, pass} = usuario[0];
    
    const validarPassword = bcryptjs.compareSync(password,pass)
    if(!validarPassword){
        return res.status(400).json({
            msg: 'Usuario y/o contraseña invalido'
        })
    }
    
    res.json({
        msg: 'Login - ok',
        authenticated: true
    })
} 

module.exports = {login}