const mongoose = require('mongoose');
const Joi = require('joi');


const WalveSchema = new mongoose.Schema({
    WaterMeterID: {
        type: String,
        // required: true
    },
    No: {
        type: Number
    },
    WaterValveID: {
        type: String,
        // required: true
    },
    Code: {
        type: String,
        // required: true
    },
    X: {
        type: Number,
        required: true
    },
    Y: {
        type: Number,
        required: true
    },
    Z: {
        type: Number,
        required: true
    },
}
);

const Walve =  mongoose.model('walves', WalveSchema);


function validateUser(meter) {
    const schema = Joi.object({
        WaterMeterID: Joi.string().required(),
        WaterWalveID: Joi.string().required(),
        No: Joi.number().required(),
        Code: Joi.string().required(),
        X: Joi.number().required(),
        Y: Joi.number().required(),
    });
    return schema.validate(meter);
}

module.exports.Walve = Walve;
module.exports.validate = validateUser;