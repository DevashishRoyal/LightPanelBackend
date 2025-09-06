const mongoose = require("mongoose");

// Schema for Light
// Wall1

const SC1schema = new mongoose.Schema(
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

const SC2Schema = new mongoose.Schema(
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


const SC1 = mongoose.model("SC1", SC1schema);
const SC2 = mongoose.model("SC2", SC2Schema);

module.exports = {SC1 , SC2};
