/* jshint esversion: 6 */
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

/*
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
});
*/

//step 3 configurar parametros y variables de entorno para Google cloud
const dbSocketPath = process.env.DB_SOCKET_PATH || '/cloudsql';

    const user =  process.env.DB_USER;
    const password =  process.env.DB_PASSWORD;
    const database = process.env.DB_NAME;
    const host = `${dbSocketPath}/${process.env.CLOUD_SQL_CONNECTION_NAME}`;

//Step 4 pruebas a la conexion
const nodeEnv = process.env.NODE_ENV;
const sequelize = nodeEnv === 'test' ?
    new Sequelize('sqlite::memory:'):
    new Sequelize(user,password,database,{
        host: host,
        dialect: 'postgres',
    });

const SensorData = sequelize.define('sensorData',{
    serial: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    temperature: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});



const app = express();
app.use(express.json());

app.get('/data', async (req, res) => {
    const allData = await SensorData.findAll();
    res.status(200).send(allData);
    return;

});



app.post('/data', async ( req, res )=> {
    let data = req.body;
    
    const sensorData = await SensorData.create(data);
    res.status(201).send (sensorData);
    return;
});



app.listen({ port: 8080 }, ()=>{
    try {
        sequelize.authenticate();
        console.log("Se ha conectado a la BD");
        sequelize.sync({alter: true});
        console.log("Se sincronizado con la a la BD");
    } catch (error) {
        console.log("No se ha conectado a la BD",error);
    }
    console.log('server is running');
});  