const { default: mongoose } = require("mongoose");
const mongooose = require("mongoose");

const userschema = new mongoose.Schema({
    username: {type: String, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},
    { timestamps: true }
);

module.exports = mongoose.model("User", userschema);