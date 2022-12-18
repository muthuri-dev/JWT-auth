
const express = require('express');
const router = express.Router();

//importing controllers;
const {
    getController,
} = require('../Controllers/get.controller');

const {
    login,
    signUp
} = require('../Controllers/Auth.controller');


//application routes;
router.post('/login',login);
router.post('/signUp',signUp);

router.get('/get',getController);



//exporting router
module.exports = {
    router,
}