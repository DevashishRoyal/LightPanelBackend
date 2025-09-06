const mongoose = require("mongoose");

// Schema for Light
// Wall1

const Fan3schema = new mongoose.Schema(
  {
    wallNo: { type: String },
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

const Fan3LightSchema = new mongoose.Schema(
  {
    wallNo: { type: String },
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


const Fan3 = mongoose.model("Fan3", Fan3schema);
const Fan3Light = mongoose.model("Fan3Light", Fan3LightSchema);

module.exports = {Fan3 , Fan3Light};
