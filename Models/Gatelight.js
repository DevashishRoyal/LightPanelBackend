const mongoose = require("mongoose");

// Schema for Light
// Gatelight

const GateLightschema = new mongoose.Schema(
  {
    wallNo: { type: String, required: true },
    sNo: { type: Number, required: true }, // Adjusted field name
    Model: { type: String },
    Dimensions: { type: String },
    ListPrice: { type: String },
    x: { type: String, required: true },
    y: { type: String, required: true },
    width: { type: String},
    height: { type: String },
    // orders:[{type: mongoose.Schema.Types.ObjectId, ref: "Orders"}]
  },
  { timestamps: true }
);

const FootLampSchema = new mongoose.Schema(
  {
    wallNo: { type: String },
    sNo: { type: Number },
    Model: { type: String },
    Dimensions: { type: String },
    ListPrice: { type: String },
    x: { type: String },
    y: { type: String },
    width: { type: String },
    height: { type: String },
    // orders:[{type: mongoose.Schema.Types.ObjectId, ref: "Orders"}]
  },
  { timestamps: true }
);

const CellingLightSchema = new mongoose.Schema(
  {
    wallNo: { type: String },
    sNo: { type: Number },
    Model: { type: String },
    Dimensions: { type: String },
    ListPrice: { type: String },
    x: { type: String },
    y: { type: String },
    width: { type: String },
    height: { type: String },
    // orders:[{type: mongoose.Schema.Types.ObjectId, ref: "Orders"}]
  },
  { timestamps: true }
);

const GardenSpikeSchema = new mongoose.Schema(
  {
    wallNo: { type: String },
    sNo: { type: Number },
    Model: { type: String },
    Dimensions: { type: String },
    ListPrice: { type: String },
    x: { type: String },
    y: { type: String },
    width: { type: String },
    height: { type: String },
    // orders:[{type: mongoose.Schema.Types.ObjectId, ref: "Orders"}]
  },
  { timestamps: true }
);
const GateLight = mongoose.model("GateLights", GateLightschema);
const FootLamp = mongoose.model("FootLamps", FootLampSchema);
const CellingLight = mongoose.model("CellingLights", CellingLightSchema);
const GardenSpike = mongoose.model("GardenSpike", GardenSpikeSchema);

module.exports = {GateLight , FootLamp , CellingLight , GardenSpike};
