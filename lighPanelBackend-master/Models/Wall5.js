const mongoose = require("mongoose");

// Schema for Light
// Wall4

const Wall5Lightschema = new mongoose.Schema(
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

const Wall5BollardsSchema = new mongoose.Schema(
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


const Wall5Light = mongoose.model("Wall5Lights", Wall5Lightschema);
const Wall5Bollards = mongoose.model("Wall5Bollards", Wall5BollardsSchema);

module.exports = {Wall5Light , Wall5Bollards};
