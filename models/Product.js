const { default: mongoose } = require("mongoose");
const mongooose = require("mongoose");

const Productschema = new mongoose.Schema(
{
    title: { type: String, require: true, unique: true },
    desc: { type: String, require: true, },
    img: { type: String, require: true },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: String, require: true },
    
},
    { timestamps: true }
);

module.exports = mongoose.model("Product", Productschema);