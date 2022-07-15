const { default: mongoose } = require("mongoose");
const mongooose = require("mongoose");

const Orderchema = new mongoose.Schema(
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
    amount: { type: Number, required: true },
    address: { type: Object, require: true },
    status: { type: String, default: "pending"},
},
    { timestamps: true }
);

module.exports = mongoose.model("Order", Orderschema);