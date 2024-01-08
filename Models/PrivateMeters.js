const mongoose = require('mongoose');
const Joi = require('joi');

// Create a schema for the user
const privateMeterSchema = new mongoose.Schema({
    MeterID: {
        type: String,
        required: true
    },
    MeterNumber: {
        type: Number
    },
    Purpose: {
        type: String,
        required: true
    },
    Images: {
        type: Number,
        required: true
    },
    Receviers: {
        type: String,
        required: true
    },
    Coordinates_X: {
        type: Number,
        required: true
    },
    Coordinates_Y: {
        type: Number,
        required: true
    },
    BuildingName: {
        type: String,
        required: true
    },
    AccountNumber: {
        type: String
    },
    AccountAddress: {
        type: String
    },
    Others: {
        type: String
    }
}
);

const PrivateMeter = mongoose.model('PrivateMeters', privateMeterSchema);

// Validate meter
function validateUser(meter) {
    const schema = Joi.object({
        MeterID: Joi.string().required(),
        MeterNumber: Joi.number(),
        Purpose: Joi.string().required(),
        Images: Joi.number().required(),
        Receviers: Joi.string().required(),
        Coordinates_X: Joi.number().required(),
        Coordinates_Y: Joi.number().required(),
        BuildingName: Joi.string().required(),
        AccountNumber: Joi.string(),
        AccountAddress: Joi.string(),
        Others: Joi.string()
    });
    return schema.validate(meter);
}

module.exports.PrivateMeter = PrivateMeter;
module.exports.validate = validateUser;