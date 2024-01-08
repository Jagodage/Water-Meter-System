const mongoose = require('mongoose');
const Joi = require('joi');


const TapSchema = new mongoose.Schema({
    TapID: {
        type: String,
        // required: true
    },
    Y: {
        type: Number,
        // required: true
    },
    E: {
        type: Number,
        // required: true
    },
    Locations: {
        type: String,
    },
    Purpose: {
        type: String,
    },
    WaterMeterID: {
        type: String,
    },
}
);

const Tap =  mongoose.model('taps', TapSchema);


function validateUser(meter) {
    const schema = Joi.object({
        TapID: Joi.string().required(),
        WaterMeterID: Joi.string().required(),
        Purpose: Joi.string().required(),
        E: Joi.number().required(),
        Y: Joi.number().required(),
    });
    return schema.validate(meter);
}

module.exports.Tap = Tap;
// module.exports.validate = validateUser;