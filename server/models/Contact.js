const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            requird: true,
            trim:true
        },
        lastName: {
            type: String,
            requird: true,
            trim:true
        },
        email: {
            type: String,
            required:true,
            unique: true,
            trim: true,
        },
        phone: {
            type: String,
            required:true,
        },
        company: {
            type: String,
        },
        jobTitle: {
            type:String,
        }
    }
)

module.exports = mongoose.model('Contact', contactSchema);