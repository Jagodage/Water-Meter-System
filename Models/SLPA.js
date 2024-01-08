const mongoose = require('mongoose');
const Joi = require('joi');

// Create a schema for the user
const SLPASchema = new mongoose.Schema({
    MeterID: {
        type: String,
        required: true
    },
    Receivers: {
        type: String,
        required: true
    },
    Purpose: {
        type: String
    },
    Others: {
        type: String
    },
    Images: {
        type: Number,
        required: true
    },
    AccountNumber: {
        type: String
    },
    BuildingName: {
        type: String
    },
    CompanyName: {
        type: String
    },
    MeterNumber: {
        type: Number
    }
});

const SLPA = mongoose.model('slpameters', SLPASchema);

// Validate meter
function validateUser(meter) {
    const schema = Joi.object({
        MeterID: Joi.string().required(),
        Receivers: Joi.string().required(),
        Purpose: Joi.string(),
        Others: Joi.string(),
        Images: Joi.number().required(),
        AccountNumber: Joi.string(),
        BuildingName: Joi.string(),
        CompanyName: Joi.string(),
        MeterNumber: Joi.number()
    });
    return schema.validate(meter);
}

module.exports.SLPA = SLPA;
module.exports.validate = validateUser;