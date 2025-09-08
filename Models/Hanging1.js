const mongoose = require("mongoose");

// Schema for Light
// Wall1

const Hanging1schema = new mongoose.Schema(
  {
    wallNo: { type: String },
    sNo: { type: Number }, // Adjusted field name
    Model: { type: String },
    Dimensions: { type: String },
    ListPrice: { type: String },
   CutOut: { type: String },
    x: { type: String, required: true },
    y: { type: String, required: true },
    width: { type: String},
    height: { type: String },
    // orders:[{type: mongoose.Schema.Types.ObjectId, ref: "Orders"}]
  },
  { timestamps: true }
);


const Hanging1 = mongoose.model("Hanging1", Hanging1schema  );

module.exports = {Hanging1};
