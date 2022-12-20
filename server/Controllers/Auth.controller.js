//database schema;
const {
    Users,
} = require('../Models/UserModel');

//dependencies;
const bcrypt = require('bcryptjs');


//importing tokens;
const {
    generateToken,
} = require('../Utils/jwtTokens');

//controllers;

const signUp = async(req, res) => {
    try {
        const { name, email, password, picture } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const userExists = await Users.findOne({ email }); //returns boolean true if user exists;
        console.log(userExists);
        if (userExists) {
            res.json({
                status: 400,
                message: 'User Already Exists!',
            });
            return;
        } else {
            const user = new Users({ name, email, password: hashedPassword, picture });
            user.save((error) => {
                if (!error) {
                    res.status(200).json({
                        user,
                        token: generateToken(user._id),
                    });
                } else {
                    res.json({
                        status: 400,
                        message: 'Error occurred while saving user',
                    });
                    return;
                }
            });
        }
    } catch (error) {
        res.send(error.message);
    }
}

const login = async(req, res) => {
    const { email, password } = req.body;
    const user = await Users.findOne({ email }); //boolean true || false;
    if (user) {
        const correctPassword = await bcrypt.compare(password, user.password); //boolean true || false;
        if (correctPassword) {
            res.json({
                status: 200,
                message: 'successful logged in',
                token: generateToken(user._id),
            })
        } else {
            res.json({
                status: 400,
                message: 'Invalid user password!'
            });
            return;
        }
    } else {
        res.json({
            status: 400,
            message: 'User with Email does not Exists!'
        });
        return;
    }
}

//exporting controllers;

module.exports = {
    signUp,
    login
}