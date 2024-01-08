const mongoose = require('mongoose');
const Joi = require('joi');

// Create a schema for the user
const waterUsageSchema = new mongoose.Schema({
    meterNumber: {
        type: Number,
        required: true
    },
    meterId: {
        type: Number,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    },
    june: {
        type: String,
        required: true
    },
    july: {
        type: String,
        required: true
    },
    august: {
        type: String,
        required: true
    }
    
});

const WaterUsage = mongoose.model('WaterUsage', waterUsageSchema);

// Validate meter
function validateUser(usage) {
    const schema = Joi.object({
        meterNumber: Joi.number().required(),
        meterId: Joi.number().required(),
        accountNumber: Joi.string().required(),
        june: Joi.string().required(),
        july: Joi.string().required(),
        august: Joi.string().required()
    });
    return schema.validate(usage);
}

module.exports.WaterUsage = WaterUsage;
module.exports.validate = validateUser;