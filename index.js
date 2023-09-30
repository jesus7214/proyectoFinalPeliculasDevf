const express = require('express');
const app = express();
const cors = require('cors');
const connectDatabase = require('./server/data/database')
const peliRutas = require('./server/routers/Rutas')


connectDatabase();

app.use(express.json())
app.use(cors())

app.use('/a', peliRutas)
const port=4000
app.listen(port, ()=>{
    console.log(`Server is ruunning on port ${port}`)
})
