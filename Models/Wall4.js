const mongoose = require("mongoose");

// Schema for Light
// Wall4

const Wall4Lightschema = new mongoose.Schema(
  {
    wallNo: { type: Number, required: true },
    sNo: { type: Number, required: true }, // Adjusted field name
    Model: { type: String },
    Dimensions: { type: String },
    ListPrice: { type: String },
    // MRP: { type: Number },
    x: { type: String, required: true },
    y: { type: String, required: true },
    width: { type: String},
    height: { type: String },
    // orders:[{type: mongoose.Schema.Types.ObjectId, ref: "Orders"}]
  },
  { timestamps: true }
);

const Wall4BollardsSchema = new mongoose.Schema(
  {
    wallNo: { type: Number },
    sNo: { type: Number },
    Model: { type: String },
    Dimensions: { type: String },
    ListPrice: { type: String },
    // MRP: { type: Number },
    x: { type: String },
    y: { type: String },
    width: { type: String },
    height: { type: String },
    // orders:[{type: mongoose.Schema.Types.ObjectId, ref: "Orders"}]
  },
  { timestamps: true }
);

const Wall4FootlampSchema = new mongoose.Schema(
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

const Wall4Light = mongoose.model("Wall4Lights", Wall4Lightschema);
const Wall4Bollards = mongoose.model("Wall4Bollards", Wall4BollardsSchema);
const Wall4Footlamp = mongoose.model("Wall4Footlamp", Wall4FootlampSchema);

module.exports = {Wall4Light , Wall4Bollards , Wall4Footlamp};
