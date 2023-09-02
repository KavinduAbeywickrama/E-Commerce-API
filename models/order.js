const mongoose = require("mongoose");
const OrderItem = require("./orderitems").OrderItem;

const orderSchema = new mongoose.Schema({
    orderItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "OrderItem",
        required: true,
    }],
    shippingAddress1: {
        type: String,
        required: true,
    },
    shippingAddress2: {
        type: String,
    },
    city: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: "Pending",
    },
    totalPrice: {
        type: Number,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    dateOrdered: {
        type: Date,
        default: Date.now,
    },
});

orderSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

orderSchema.set("toJSON", {
    virtuals: true,
});


exports.Order = mongoose.model('Order', orderSchema);

// order Example

// {
//     "orderItems": [
//         {
//             "quantity": 3,
//             "product": "5f1f7b7b8b9b3e1b1c3b1b1b"
//         },
//         {
//             "quantity": 2,
//             "product": "5f1f7b7b8b9b3e1b1c3b1b1b"
//         }
//     ],
//     "shippingAddress1": "1234",
//     "shippingAddress2": "1234",
//     "city": "1234",
//     "zip": "1234",
//     "country": "1234",
//     "phone": "1234",
//     "user": "5f1f7b7b8b9b3e1b1c3b1b1b",

// }

