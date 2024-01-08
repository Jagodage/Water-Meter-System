const mongoose = require('mongoose');
const Joi = require('joi');

// Create a schema for the user
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    Password: {
        type: String,
        required: true,
        min: 8,
        max: 1024
    }
});

const User = mongoose.model('User', userSchema);

// Validate user
function validateUser(user) {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        Password: Joi.string().min(8).max(1024).required()
    });
    return schema.validate(user);
}

module.exports.User = User;
module.exports.validate = validateUser;