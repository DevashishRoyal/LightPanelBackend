const { Wall5Light , Wall5Bollards  } = require("../Models/Wall5");
exports.Wall5BollardsGetAll = async (req, res) => {
  try {
    const bollards = await Wall5Bollards.find().sort({sNo:1});
    res.status(200).json({ success: true, data: bollards });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}
exports.Wall5bollardsGetById = async (req, res) => {
  try {
    const {id} = req.params
    const bollards = await Wall5Bollards.findById( id);
    res.status(200).json({ success: true, data: bollards });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

exports.Wall5lightsGetById = async (req, res) => {
  try {
    const {id} = req.params
    const light = await Wall5Light.findById(id)
    res.status(200).json({ success: true, data: light });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}


exports.Wall5bollardsPost = async (req, res) => {
  try {
    const data = req.body
    const result = await Wall5Bollards.insertMany(data)
    res.send({ status: true, message: 'Data Successfully Added', data: result });
  } catch (error) {
    console.error("Error in adding data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

exports.Wall5updateBollardsData = async (req, res) => {
  try {
    const { id, ...updateData } = req.body; // Extract id separately

    if (!id) {
      return res.status(400).json({ status: false, message: "User ID is required" });
    }

    const result = await Wall5Bollards.updateOne({ _id: id }, { $set: updateData });

    if (result.modifiedCount === 0) {
      return res.status(404).json({ status: false, message: "User not found or no changes made" });
    }

    res.json({ status: true, message: "Data Successfully Updated", data: result });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};


exports.Wall5LightsGetAll = async (req, res) => {
  try {
    const lights = await Wall5Light.find().sort({sNo:1});
    res.status(200).json({ success: true, data: lights });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

exports.Wall5postAllLights= async (req, res) => {
  try {
    const data = req.body;

    // Using bracket notation to correctly access the fields with spaces
    const result = await Wall5Light.insertMany(data);

    res.send({ status: true, message: 'Data Successfully Added', data: result });

  } catch (error) {
    console.error("Error in adding data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
exports.Wall5updateLightsData = async (req, res) => {
  try {
    const { id, ...updateData } = req.body; // Extract id separately

    if (!id) {
      return res.status(400).json({ status: false, message: "User ID is required" });
    }

    const result = await Wall5Light.updateOne({ _id: id }, { $set: updateData });

    if (result.modifiedCount === 0) {
      return res.status(404).json({ status: false, message: "User not found or no changes made" });
    }

    res.json({ status: true, message: "Data Successfully Updated", data: result });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};













