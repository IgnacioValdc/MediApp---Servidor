const {Router} = require('express');
const {check} = require('express-validator');
const {validarCampos} = require('../middlewares/index.middlewares.js');
const { crearPaciente, asignarProfesional,login, listarPaciente } = require('../controllers/pacientes.controller.js');
const {listarRangos} = require('../controllers/rangos.controller.js')
const { existeProfesional, existePaciente } = require('../helpers/db-validacion.js');


const routerPaciente = Router();

routerPaciente.get('/:id',listarPaciente)
routerPaciente.get('/rangos/:id',listarRangos)

routerPaciente.post('/loginpaciente',[
    check('correo','El correo es obligatorio').isEmail(),
    check('password','La contraseña es obligatoria').not().isEmpty(),
    validarCampos
],login)

routerPaciente.post('/crearPaciente',[
    check('nombre','El nombre es requerido').not().isEmpty(),
    check('pass','La contraseña es requerida').not().isEmpty().isLength({min: 6}),
    check('ciudad','La ciudad es requerida').not().isEmpty(),
    check('correo','El correo es requerido').isEmail(),
    validarCampos
],crearPaciente)


routerPaciente.post('/asignacionpaciente',[
    check('idpaciente','El paciente es obligatorio').not().isEmpty().isNumeric(),
    check('idpaciente').custom(existePaciente),
    check('puntaje','El puntaje es obligatorio').not().isEmpty().isNumeric(),
    check('idprofesional','El profesional es obligatorio').not().isEmpty().isNumeric(),
    check('idprofesional').custom(existeProfesional),
    validarCampos
],asignarProfesional)






module.exports = routerPaciente;