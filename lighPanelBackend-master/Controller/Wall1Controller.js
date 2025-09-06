const { Wall1Light , Wall1Bollards , Wall1Footlamp } = require("../Models/Wall1");
exports.Wall1BollardsGetAll = async (req, res) => {
  try {
    const bollards = await Wall1Bollards.find().sort({sNo:1});
    res.status(200).json({ success: true, data: bollards });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}
exports.Wall1bollardsGetById = async (req, res) => {
  try {
    const {id} = req.params
    const bollards = await Wall1Bollards.findById( id);
    res.status(200).json({ success: true, data: bollards });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

exports.Wall1lightsGetById = async (req, res) => {
  try {
    const {id} = req.params
    const light = await Wall1Light.findById(id)
    res.status(200).json({ success: true, data: light });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}


exports.Wall1bollardsPost = async (req, res) => {
  try {
    const data = req.body
    const result = await Wall1Bollards.insertMany(data)
    res.send({ status: true, message: 'Data Successfully Added', data: result });
  } catch (error) {
    console.error("Error in adding data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

exports.Wall1updateBollardsData = async (req, res) => {
  try {
    const { id, ...updateData } = req.body; // Extract id separately

    if (!id) {
      return res.status(400).json({ status: false, message: "User ID is required" });
    }

    const result = await Wall1Bollards.updateOne({ _id: id }, { $set: updateData });

    if (result.modifiedCount === 0) {
      return res.status(404).json({ status: false, message: "User not found or no changes made" });
    }

    res.json({ status: true, message: "Data Successfully Updated", data: result });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};


exports.Wall1LightsGetAll = async (req, res) => {
  try {
    const lights = await Wall1Light.find().sort({sNo:1});
    res.status(200).json({ success: true, data: lights });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

exports.Wall1postAllLights= async (req, res) => {
  try {
    const data = req.body;

    // Using bracket notation to correctly access the fields with spaces
    const result = await Wall1Light.insertMany(data);

    res.send({ status: true, message: 'Data Successfully Added', data: result });

  } catch (error) {
    console.error("Error in adding data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
exports.Wall1updateLightsData = async (req, res) => {
  try {
    const { id, ...updateData } = req.body; // Extract id separately

    if (!id) {
      return res.status(400).json({ status: false, message: "User ID is required" });
    }

    const result = await Wall1Light.updateOne({ _id: id }, { $set: updateData });

    if (result.modifiedCount === 0) {
      return res.status(404).json({ status: false, message: "User not found or no changes made" });
    }

    res.json({ status: true, message: "Data Successfully Updated", data: result });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};





exports.Wall1FootlamplightsGetById = async (req, res) => {
  try {
    const {id} = req.params
    const light = await Wall1Footlamp.findById(id)
    res.status(200).json({ success: true, data: light });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

exports.Wall1FootlampLightsGetAll = async (req, res) => {
  try {
    const lights = await Wall1Footlamp.find().sort({sNo:1});
    res.status(200).json({ success: true, data: lights });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

exports.Wall1FootlamppostAllLights= async (req, res) => {
  try {
    const data = req.body;

    // Using bracket notation to correctly access the fields with spaces
    const result = await Wall1Footlamp.insertMany(data);

    res.send({ status: true, message: 'Data Successfully Added', data: result });

  } catch (error) {
    console.error("Error in adding data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
exports.Wall1FootlampupdateLightsData = async (req, res) => {
  try {
    const { id, ...updateData } = req.body; // Extract id separately

    if (!id) {
      return res.status(400).json({ status: false, message: "User ID is required" });
    }

    const result = await Wall1Footlamp.updateOne({ _id: id }, { $set: updateData });

    if (result.modifiedCount === 0) {
      return res.status(404).json({ status: false, message: "User not found or no changes made" });
    }

    res.json({ status: true, message: "Data Successfully Updated", data: result });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

