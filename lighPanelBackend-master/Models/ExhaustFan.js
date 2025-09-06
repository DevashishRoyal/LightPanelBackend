const mongoose = require("mongoose");

// Schema for Light
// Wall1

const ExhaustFan1schema = new mongoose.Schema(
  {
    wallNo: { type: String },
    sNo: { type: Number, required: true }, // Adjusted field name
    Model: { type: String },
    Dimensions: { type: String },
    ListPrice: { type: Number },
    CutOut: { type: String },
    MRP: { type: Number },
    x: { type: String, required: true },
    y: { type: String, required: true },
    width: { type: String},
    height: { type: String },
    // orders:[{type: mongoose.Schema.Types.ObjectId, ref: "Orders"}]
  },
  { timestamps: true }
);

const ExhaustFan2Schema = new mongoose.Schema(
  {
    wallNo: { type: String },
    sNo: { type: Number },
    Model: { type: String },
    Dimensions: { type: String },
    ListPrice: { type: Number },
    CutOut: { type: String },
    MRP: { type: Number },
    x: { type: String },
    y: { type: String },
    width: { type: String },
    height: { type: String },
    // orders:[{type: mongoose.Schema.Types.ObjectId, ref: "Orders"}]
  },
  { timestamps: true }
);

const ExhaustFan3Schema = new mongoose.Schema(
  {
    wallNo: { type: String },
    sNo: { type: Number },
    Model: { type: String },
    Dimensions: { type: String },
    ListPrice: { type: Number },
    CutOut: { type: String },
    MRP: { type: Number },
    x: { type: String },
    y: { type: String },
    width: { type: String },
    height: { type: String },
    // orders:[{type: mongoose.Schema.Types.ObjectId, ref: "Orders"}]
  },
  { timestamps: true }
);





const ExhaustFan1 = mongoose.model("ExhaustFan1", ExhaustFan1schema);
const ExhaustFan2 = mongoose.model("ExhaustFan2", ExhaustFan2Schema);
const ExhaustFan3 = mongoose.model("ExhuastFan3", ExhaustFan3Schema);
module.exports = {ExhaustFan1 , ExhaustFan2 , ExhaustFan3};
