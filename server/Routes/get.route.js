
const express = require('express');
const router = express.Router();

//importing controllers;
const {
    getController,
} = require('../Controllers/get.controller');


//application routes;

router.get('/get',getController);



//exporting router
module.exports = {
    router,
}