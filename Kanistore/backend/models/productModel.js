const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    brandName: {
        type: String,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    subcategoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category.subCategories'
    },
    productImage: {
        type: [String],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sellingPrice: {
        type: Number,
        required: true
    },
    quantityOptions: [
        {
            quantity: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            }
        }
    ]
}, {
    timestamps: true
});

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;
