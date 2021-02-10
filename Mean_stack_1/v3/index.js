/* jshint esversion: 6 */
const express = require('express');
const app = express();
app.use(express.json());

//cargamos el modulo instalado
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres'
});

//Step 7 creamos un squema
const SensorData = sequelize.define('sensor-data',{
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
//step 8
//const datalist = [];

//step 10
app.get('/data', async (req, res) => {
    const allData = await SensorData.findAll();
    res.status(200).send(allData);
    return;

});


//step 9
app.post('/data', async ( req, res )=> {
    let data = req.body;
    //datalist.push(data);
    const sensorData = await SensorData.create(data);
    res.status(201).send (sensorData);
    return;
});


//step 6  //step 7
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