const { client } = require("../database/conexionDB")

const existeProfesional = async(id = '') => {
    const idprofesional = await client.query(`select idprofesional from profesionales where idprofesional = '${id}' and activa = true`)
    if(!idprofesional){
        throw new Error(`El profesional no existe o se encuentra eliminado`);
    }
}

const profesionalEliminado = async(id = '') => {
    const idprofesional = await client.query(`select idprofesional from profesionales where idprofesional = '${id}'`)
    if(!idprofesional){
        throw new Error(`El profesional no existe`);
    }
}

const existePregunta = async(id = '') => {
    const idprofesional = await client.query(`select idpregunta from preguntas where idpregunta = '${id}' and activa = true`)
    if(!idprofesional){
        throw new Error(`La pregunta no existe o se encuentra eliminada`);
    }
}

const preguntaEliminada = async(id = '') => {
    const idprofesional = await client.query(`select idpregunta from preguntas where idpregunta = '${id}'`)
    if(!idprofesional){
        throw new Error(`La pregunta no existe`);
    }
}

const existePaciente = async(id = '') => {
    const idpaciente = await client.query(`select idpaciente from pacientes where idpaciente = '${id}'`)
    if(!idpaciente){
        throw new Error(`El paciente no existe`)
    }
}

module.exports = {
    existeProfesional,
    existePregunta,
    existePaciente,
    profesionalEliminado,
    preguntaEliminada
}