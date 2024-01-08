const express = require('express');
const router = express.Router();
const { User } = require('../Models/User');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

router.post('/', async (req, res) => {
    const {error} = validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    // Get the user by email
    let user = await User.findOne({email: req.body.email});
    if (!user) {
        console.log("hello");
        return res.status(400).json({ error: 'Incorrect email or password!' });
    }
    // Check for the password  
    if (req.body.Password !== user.Password) {
        return res.status(400).json({ error: 'Incorrect email or password!' });
    }
   const token = jwt.sign({_id:user._id, email:user.email}, process.env.JWT_SECRET_KEY);
   res.send({token: token, userID: user._id});
});

function validate(user){
    const schema = Joi.object({
        email: Joi.string().required().email(),
        Password: Joi.string().min(8).max(255).required()
    });
    return schema.validate(user);
};


module.exports = router;