const mongoose = require('mongoose');
const Joi = require('joi');


const GraphSchema = new mongoose.Schema({
    MeterID: {
        type: String,
        required: true
    },
    CompanyName: {
        type: String
    },
    MeterNumber: {
        type: Number,
        required: true
    },
    BuildingName: {
        type: String
    },
    Purpose: {
        type: String
    },
    April: {
        type: Number,
        required: true
    },
    May: {
        type: Number,
        required: true
    },
    June: {
        type: Number,
        required: true
    },
    July: {
        type: Number,
        required: true
    },
    Auguest: {
        type: Number,
        required: true
    }
    
});

const WaterUsage = mongoose.model('waterusage', GraphSchema);


function validateUser(meter) {
    const schema = Joi.object({
        MeterID: Joi.string().required(),
        CompanyName: Joi.string(),
        MeterNumber: Joi.number().required(),
        BuildingName: Joi.string(),
        Purpose: Joi.string(),
        April: Joi.number().required(),
        May: Joi.number().required(),
        June: Joi.number().required(),
        July: Joi.number().required(),
        Auguest: Joi.number().required()
    });
    return schema.validate(meter);
}

module.exports.WaterUsage = WaterUsage;
module.exports.validate = validateUser;