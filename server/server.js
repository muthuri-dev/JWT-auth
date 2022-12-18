const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const {
    notFound,
    errorHandler,
} = require('./Middlewares/errors.middleware');


//initializing the app;
const app = express();

//middlewares;
app.use(cors());
app.use(bodyParser.json());
//app.use(notFound);
//app.use(errorHandler);

//importing routes;
const {
    router,
} = require('./Routes/auth.route');

//importing databases;
const {
    database,
} = require('./Databases/mongo');

//application routes;
app.use('/auth', router);

//initializing server;
app.listen(process.env.PORT, (error) => {
    if (!error) {
        database();
        console.log(process.env.PORT);
    } else {
        console.log(error.message);
    }
});