const { User } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { BadRequestError, UnauthenticatedError } = require('../errors');

const createUser = async (req, res, next) => {

    try {
        const {
            firstname,
            lastname,
            email,
            password
        } = req.body;

        if (!firstname || !lastname || !email || !password) {
            // res.status(400).send("Provide all the details");
            throw new BadRequestError('Please provide all the details');
        }

        //*hash password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        //* saving details in the user model
        const user = new User({
            firstname,
            lastname,
            email,
            password: hashedPassword
        });

        //* saving the user in db
        const createdUser = await user.save();
        res.status(200).json(createdUser);

    } catch (err) {
        // res.status(500).send(err);
        next(err);
    }
}

const getAllUserNames = async (req, res, next) => {
    try {
        // const names = await User.find();
        const names = await User.find().select({ firstname: 1 });
        res.status(200).send(names);
    } catch (err) {
        // res.status(500).send(err);
        next(err);
    }
}

const loginUser = async (req, res, next) => {

    try {
        const {
            email,
            password
        } = req.body;

        if (!email || !password) {
            // res.status(400).send("provide all details");
            throw new BadRequestError('Please provide all the details');
        }

        //*checking if email exists in db
        const existingUser = await User.findOne({ email })
        if (!existingUser) {
            // res.status(400).send("Invalid Credentials");
            throw new UnauthenticatedError('Invalid Credentials');
        }

        //*checking password
        const match = await bcrypt.compare(password, existingUser.password);

        //*loging in the user i.e. creating jwt token
        if (match) {
            const token = jwt.sign(
                { firstname: existingUser.firstname, lastname: existingUser.lastname, id: existingUser._id },
                process.env.JWT_SECRET,
                { expiresIn: "3 days" }
            )
            res.status(200).send(token);
        }
        else {
            // res.status(400).send("wrong credentials");
            throw new UnauthenticatedError('Invalid Credentials');
        }


    } catch (err) {
        // res.status(500).send(err);
        next(err);
    }
}

const getUser = async (req, res, next) => {
    let token;
    try {
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(" ")[1];
        }

        if (!token) {
            throw new UnauthenticatedError('Not signedin');
        }


        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // res.json(decoded);
        // console.log(decoded);
        const user = await User.findById(decoded.id);

        if (!user) {
            throw new UnauthenticatedError('Not signedin');
        }

        res.status(200).send(user);


    } catch (err) {
        next(err);
    }
}

module.exports = {
    createUser,
    getAllUserNames,
    loginUser,
    getUser
}