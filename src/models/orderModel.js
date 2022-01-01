const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId
const orders = new mongoose.Schema({

    userId: {type: ObjectId, ref: 'ProductUser', required: true},
    items: [{
      productId: {type: ObjectId, ref: 'Product', required: true},
      quantity: {type: Number, required: true, min: 1}
    }],
    totalPrice: {type: Number, required: true, comment: "Holds total price of all the items in the cart"},
    totalItems: {type:Number, required: true, comment: "Holds total number of items in the cart"},
    totalQuantity: {type:Number, required: true, comment: "Holds total number of items in the cart"},
    cancellable: {type:Boolean, default: true},
    status: {type:String, default: 'pending', enum:["pending", "completed", "cancelled"]},
    isDeleted: {type: Boolean, default: false},
    deletedAt: {type: Date, default: null}

}, { timestamps: true })

module.exports = mongoose.model('orders', orders )