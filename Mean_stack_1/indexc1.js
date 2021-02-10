/* jshint esversion: 6 */
const express = require('express');

const app = express();


app.get('hello', (req, res) => {
    res.status(200).send('hello this is my first hello word');
    return;

});

app.listen({ port: 8080 }, ()=>{
    console.log('server is running');
});