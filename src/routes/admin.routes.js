const {Router} = require('express');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/index.middlewares.js');
const {login} = require('../controllers/login.controller.js')
const {crearUsuario, listaradmin} = require('../controllers/admin.controller.js');
const {listarProfesionales, crearProfesional, actualizarProfesional, eliminarProfesional,activarProfesional, listarProfesional, listarrangoProfesional} = require('../controllers/profesionales.controller.js');
const {resumenPacientes} = require('../controllers/pacientes.controller.js');
const { existeProfesional, profesionalEliminado, existePregunta, preguntaEliminada } = require('../helpers/db-validacion.js');
const {listarPreguntas, crearPregunta, actualizarPregunta, activarPregunta, eliminarPregunta, individualPregunta} = require('../controllers/preguntas.controller.js')

const routerAdmin = Router();

//Obtener a los profesionales
routerAdmin.get('/profesionales/:activo',listarProfesionales);
routerAdmin.get('/profesional/:id',listarProfesional)
routerAdmin.get('/profesional/rango/:id',listarrangoProfesional)

//Creacion de un profesional
routerAdmin.post('/crearProfesional',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('especialidad','La especialidad es obligatoria').not().isEmpty(),
    check('rango','El rango es obligatorio').not().isEmpty(),
    validarCampos
],crearProfesional);

//Obtener un profesional
routerAdmin.put('/profesional/:id',[
    check('id','No es un id valido').isNumeric(),
    check('id').custom(existeProfesional),
    validarCampos
],actualizarProfesional)

//Quitar eliminacion de profesional
routerAdmin.patch('/profesional/:id',[
    check('id','No es un id valido').isNumeric(),
    check('id').custom(profesionalEliminado)
],activarProfesional)

//Eliminar de forma logica un profesional
routerAdmin.delete('/profesional/:id',[
    check('id','No es un id valido').isNumeric(),
    check('id').custom(existeProfesional),
    validarCampos
],eliminarProfesional)


// ===============================================
// Preguntas y rangos

//Listar preguntas
routerAdmin.get('/preguntas/:activo',listarPreguntas);
routerAdmin.get('/pregunta/:id',individualPregunta);

//Crear una pregunta
routerAdmin.post('/preguntas',[
    check('pregunta','La pregunta es requerida').not().isEmpty(),
    check('opcion_1','La opción es requerida').not().isEmpty(),
    check('opcion_2','La opción es requerida').not().isEmpty(),
    check('opcion_3','La opción es requerida').not().isEmpty(),
    validarCampos
],crearPregunta)

//Actualizar pregunta
routerAdmin.put('/preguntas/:id',[
    check('id','No es un id valido').isNumeric(),
    check('id').custom(existePregunta),
    validarCampos
],actualizarPregunta)

//Quitar eliminacion logica pregunta
routerAdmin.patch('/preguntas/:id',[
    check('id', 'No es un id valido').isNumeric(),
    check('id').custom(preguntaEliminada)
],activarPregunta)

//Eliminacion logica pregunta
routerAdmin.delete('/preguntas/:id',[
    check('id', 'No es un id valido').isNumeric(),
    check('id').custom(existePregunta)
],eliminarPregunta)

//Obtener a los pacientes
routerAdmin.get('/pacientes',resumenPacientes);

//Login de los administradores
routerAdmin.post('/login',[
    check('correo','El correo es obligatorio').isEmail(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
    validarCampos
],login);

//Listar administradores
routerAdmin.get('/listaradmin',listaradmin)

//Creacion de un administrador
routerAdmin.post('/crear',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('correo','El correo es obligatorio').isEmail(),
    check('password','El password debe de ser mas de 6 caracteres').not().isEmpty().isLength({min: 6}),
    validarCampos
],crearUsuario);

module.exports = routerAdmin;