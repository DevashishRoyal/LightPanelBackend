const {Hanging1} = require("../Models/Hanging1");


exports.Hanging1lightsGetById = async (req, res) => {
  try {
    const {id} = req.params
    const light = await Hanging1.findById(id)
    res.status(200).json({ success: true, data: light });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}







exports.Hanging1LightsGetAll = async (req, res) => {
  try {
    const lights = await Hanging1.find().sort({sNo:1});
    res.status(200).json({ success: true, data: lights });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

exports.Hanging1postAllLights= async (req, res) => {
  try {
    const data = req.body;

    // Using bracket notation to correctly access the fields with spaces
    const result = await Hanging1.insertMany(data);

    res.send({ status: true, message: 'Data Successfully Added', data: result });

  } catch (error) {
    console.error("Error in adding data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
exports.Hanging1updateLightsData = async (req, res) => {
  try {
    const { id, ...updateData } = req.body; // Extract id separately

    if (!id) {
      return res.status(400).json({ status: false, message: "User ID is required" });
    }

    const result = await Hanging1.updateOne({ _id: id }, { $set: updateData });

    if (result.modifiedCount === 0) {
      return res.status(404).json({ status: false, message: "User not found or no changes made" });
    }

    res.json({ status: true, message: "Data Successfully Updated", data: result });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};













