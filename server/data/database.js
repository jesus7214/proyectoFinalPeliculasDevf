const mongoose = require('mongoose');

async function connectDatabase(){

    try{
        await mongoose.connect("mongodb+srv://jesus:Andromeda5.@proyectofinaldevf.rqdtrzj.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp",{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        
        )
console.log('conexion a la base correcta')
    }catch(error){
        console.log('error al conectar a la base datoss', error);
    }
}


module.exports = connectDatabase