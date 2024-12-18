const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("DB connected succefully");
    }).catch((err) => {
        console.log("DB connection falied");
        console.log(err);

        process.exit(1);
    })
}