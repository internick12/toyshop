require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

app.use( express.static('public/toyshop') );

app.get('/holaMundo', (req, res) => {
    res.send('Hello World desde su ruta');
});


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/toyshop/index.html');
});
 
app.listen( port, ()=>{
    console.log(`Apliacion corriendo en el puerto: ${ port }`);
});