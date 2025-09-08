const mongoose = require("mongoose");

// Schema for Light
// Wall1

const Fan2schema = new mongoose.Schema(
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

const Fan2LightSchema = new mongoose.Schema(
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

const Fan2TubeLightSchema = new mongoose.Schema(
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





const Fan2 = mongoose.model("Fan2", Fan2schema);
const Fan2Light = mongoose.model("Fan2Light", Fan2LightSchema);
const Fan2TubeLight = mongoose.model("Fan2TubeLight", Fan2TubeLightSchema);
module.exports = {Fan2 , Fan2Light ,Fan2TubeLight};
