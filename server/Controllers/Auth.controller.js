//database schema;
const UserModel = require("../Models/UserModel");
const jwt = require('jsonwebtoken');

//controllers;
const maxAge = 3*24*60*60;

const jwtToken = (id)=>{
    return jwt.sign({id},'KennedySecreteKey',{
        expiresIn:maxAge,
    })
}

const signUp = (req, res)=>{

}

const login = async(req, res)=>{
    try{
        const {email, password} = req.body;
        const user = await UserModel.create({email, password});
        const token = jwtToken(user._id);

        res.cookie("jwt",)
    }catch(error){

    }
}

//exporting controllers;

module.exports = {
    signUp,
    login
}