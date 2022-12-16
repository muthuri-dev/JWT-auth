const mongoose = require('mongoose');
require('dotenv').config();

const database = ()=>{
    mongoose.connect(process.env.MONGODB_OFFLINE_DATABASE,
        // {
        //     useNewUrlParser:true,
        //     useUnifieddTopology:true,
        // }
     ).then(()=> console.log('connected to database')
    ).catch(error=>console.log(error.message));
}

//exporting database;
module.exports = {
    database,
}