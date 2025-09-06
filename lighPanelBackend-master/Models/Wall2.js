const mongoose = require("mongoose");

// Schema for Lights
const WallItemSchema = new mongoose.Schema(
  {
    wallNo: { type: Number, required: true },
    sNo: { type: Number, required: true }, // Adjusted field name
    Model: { type: String },
    Dimensions: { type: String },
    ListPrice: { type: String },
    MRP: { type: Number },
    x: { type: String, required: true },
    y: { type: String, required: true },
    width: { type: String},
    height: { type: String },
    // orders:[{type: mongoose.Schema.Types.ObjectId, ref: "Orders"}]
  },
  { timestamps: true }
);

// Schema for Bollards
const BollardsSchema = new mongoose.Schema(
  {
    wallNo: { type: Number },
    sNo: { type: Number },
    Model: { type: String },
    Dimensions: { type: String },
    ListPrice: { type: String },
    MRP: { type: Number },
    x: { type: String },
    y: { type: String },
    width: { type: String },
    height: { type: String },
    // orders:[{type: mongoose.Schema.Types.ObjectId, ref: "Orders"}]
  },
  { timestamps: true }
);


const Wall2FootlampSchema = new mongoose.Schema(
  {
    wallNo: { type: Number },
    sNo: { type: Number },
    Model: { type: String },
    Dimensions: { type: String },
    ListPrice: { type: String },
    MRP: { type: Number },
    x: { type: String },
    y: { type: String },
    width: { type: String },
    height: { type: String },
    // orders:[{type: mongoose.Schema.Types.ObjectId, ref: "Orders"}]
  },
  { timestamps: true }
);
// const orderSchema = new mongoose.Schema({
//   productId: { type: mongoose.Schema.Types.ObjectId, refPath: 'productType', required: true }, // ✅ Fixed ObjectId  username: { type: String },
//   quantity: { type: Number },
//   price: { type: Number},
//   date: { type: Date, default: Date.now }
// });

// Correct way to export multiple models
const Lights = mongoose.model("Lights", WallItemSchema);
const Bollards = mongoose.model("Bollards", BollardsSchema);
const Wall2Footlamp = mongoose.model("Wall2Footlamp", Wall2FootlampSchema);

// const Orders = mongoose.model("Orders", orderSchema);
module.exports = { Lights,Bollards, Wall2Footlamp };
