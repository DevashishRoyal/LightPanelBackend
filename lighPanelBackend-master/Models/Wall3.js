const mongoose = require("mongoose");

// Schema for Light
// Wall3

const Wall3Lightschema = new mongoose.Schema(
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

const Wall3BollardsSchema = new mongoose.Schema(
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

const Wall3FootlampSchema = new mongoose.Schema(
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


const Wall3Light = mongoose.model("Wall3Lights", Wall3Lightschema);
const Wall3Bollards = mongoose.model("Wall3Bollards", Wall3BollardsSchema);
const Wall3Footlamp = mongoose.model("Wall3Footlamp", Wall3FootlampSchema);

module.exports = {Wall3Light , Wall3Bollards , Wall3Footlamp};
