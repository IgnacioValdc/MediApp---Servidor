
const express = require('express');
const cors = require('cors');

const {client} = require('../database/conexionDB.js')


class Server {


    constructor(){
        this.app = express();
        this.port = process.env.PORT;


        //rutas
        this.paths = {
            admin:      '/api/admin',
            paciente:   '/api/paciente'
        }

        //conexion BBDD
        this.dbConexion();
        //Middlewares
        this.middlewares();
        //rutas de la aplicacion
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    async dbConexion(){

        try {
            await client.connect();
            console.log("Conexion a la base de datos establecida con exito");
        } catch (error) {
            console.log("Algo a fallado en la conexion a la base de datos. Error", error)
        }
        
    }
    routes(){
        this.app.use(this.paths.admin, require('../routes/admin.routes.js'));
        this.app.use(this.paths.paciente, require('../routes/paciente.routes.js'));
    }


    listen(){
        this.app.listen(this.port, () => {
            console.log('Escuchando en el puerto: ', this.port)
        })
    }
}

module.exports = {
    Server
} 