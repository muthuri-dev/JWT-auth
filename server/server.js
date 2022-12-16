const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bycrpt = require('bcryptjs');
require('dotenv').config();


//inintializing the app;
const app = express();

//middlewares;
app.use(cors());
app.use(bodyParser.json());

//importing routes;
const {
    router,
} = require('./Routes/get.route');

//importing databases;
const {
    database,
} = require('./Databases/mongo');

//application routes;
app.use('/auth',router);

//initializing server;
app.listen(process.env.PORT,(error)=>{
    if(!error){
        database();
        console.log(process.env.PORT);
    }else{
        console.log(error.message);
    }
});