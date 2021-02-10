/* jshint esversion: 6 */
const express = require('express');

const app = express();
// step 1 habilitamos el poder enviar datos en formato json
app.use(express.json());

/* step 2 hacemos un arreglo vacio.*/
const datalist = [];

/**
 * step 3 mandamos nuestro datalist al front end cuando lo soliciten
 */
app.get('/data', (req, res) => {
    res.status(200).send(datalist);
    return;

});

/** step 4
 * creamos un metodo post para recoger los datos que vienen del front end
 * tomamos todo lo que viaja en el metodo con REQ.BODY
 * agregamos lo que nos mandaron a nuestro array y regresamos la actualizacion
 * IMPORTANTE : abrimos una nueva terminal para mandar datos con : 
 * curl -d '{"name":"PG"}' -H 'Content-Type: application/json' http://localhost:8080/data
 * O por POSTMAN
 */

app.post('/data', ( req, res )=> {
    let data = req.body;
    datalist.push(data);
    res.status(201).send (data);
    return;
});

app.listen({ port: 8080 }, ()=>{
    console.log('server is running');
});  