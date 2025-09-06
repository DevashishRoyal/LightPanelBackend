// const mongoose = require("mongoose");

// const CartItemSchema = new mongoose.Schema({
//   cartName: { type: String, required: true },
//   wallName: { type: String, required: true },
//   items: [
//     {
//       Model: { type: String,   },
//       ListPrice: { type: String,  },
//       Dimensions: { type: String,  },
//       qty: { type: Number, min: 1 },
//     },
//   ],
//   createdAt: { type: Date, default: Date.now },
// });
// module.exports = mongoose.model("CartItem", CartItemSchema);
// const mongoose = require("mongoose");

// const CartItemSchema = new mongoose.Schema({
//   cartName: { type: String, required: true },     // ✅ Must be provided
//   wallName: { type: String, required: true },     // ✅ Must be provided
//   items: [
//     {
//       Model: { type: String, required: true },     // ✅ Ensure all items have Model
//       ListPrice: { type: String, required: true }, // ✅ Always expect a price
//       Dimensions: { type: String, required: true },// ✅ Required for item size
//       qty: { type: Number, min: 1, default: 1 },   // ✅ Minimum quantity
//     },
//   ],
//   createdAt: { type: Date, default: Date.now },   // ✅ Auto timestamp
// });

// module.exports = mongoose.model("CartItem", CartItemSchema);
// const mongoose = require('mongoose');

// const CartItemSchema = new mongoose.Schema({
  
//   cartName: { type: String, required: true, unique: true }, // Optional: add 'unique' if only one cart per name
//   items: [
//     {
      
//       Model: { type: String, required: false },
//       ListPrice: { type: String, required: false },
//       Dimensions: { type: String, required: false },
//       qty: { type: Number, min: 1, default: 1 },
//     },
//   ],
//   createdAt: { type: Date, default: Date.now },
// });

// const CartItem = mongoose.model('CartItem', CartItemSchema);

// module.exports = CartItem;

const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
  cartName: { type: String, required: true, unique: true },
  items: [
    {
      Model: { type: String, required: false },
      ListPrice: { type: String, required: false },
      Dimensions: { type: String, required: false },
      qty: { type: Number, min: 1, default: 1 },
      remark: { type: String, default: '' } // Add this new field
    },
  ],
  address: { type: String, default: '' }, // Add address field
  contact: { type: String, default: '' }, // Add contact field
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now } // Add updatedAt field
});

const CartItem = mongoose.model('CartItem', CartItemSchema);

module.exports = CartItem;
