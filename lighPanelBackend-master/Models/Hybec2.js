const mongoose = require("mongoose");

// Schema for Light
// Wall1

const Hybec2schema = new mongoose.Schema(
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


const Hybec2 = mongoose.model("HybecPanel2", Hybec2schema);

module.exports = {Hybec2};
