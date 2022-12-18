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
            res.status(400)
            throw new Error('User Already Exists!');
        } else {
            const user = new Users({ name, email, password: hashedPassword, picture });
            user.save((error) => {
                if (!error) {
                    res.status(200).json({
                        user,
                        token: generateToken(user._id),
                    });
                } else {
                    res.status(400)
                    throw new Error('Error occurred while saving the user');
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
                message: 'Correct password',
                token: generateToken(user._id),
            })
        } else {
            throw new Error('Invalid password');
        }
    } else {
        throw new Error('User does not Exists!');
    }
}

//exporting controllers;

module.exports = {
    signUp,
    login
}