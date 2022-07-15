const { default: mongoose } = require("mongoose");
const mongooose = require("mongoose");

const Cartchema = new mongoose.Schema(
{
    
    userId: { type: String, require: true, },
    products: [
        {
            productId: {
                type: String,
            },
            quantity: {
                type: Number,
                dafault: 1,
            },
        },
    ],
},
    { timestamps: true }
);

module.exports = mongoose.model("Cart", Cartschema);