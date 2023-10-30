const { Client } = require('pg');



const conexionDB = {

    user: 'postgres',
    host: 'localhost',
    database: 'MediApp',
    password: 'CharAznable1994',
    port: 5432
}

const client = new Client(conexionDB)

module.exports = {
    client
}