const { ExhaustFan1 , ExhaustFan2 , ExhaustFan3  } = require("../Models/ExhaustFan");
exports.ExhaustFan2GetAll = async (req, res) => {
  try {
    const bollards = await ExhaustFan2.find();
    res.status(200).json({ success: true, data: bollards });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}
exports.ExhaustFan2GetById = async (req, res) => {
  try {
    const {id} = req.params
    const bollards = await ExhaustFan2.findById( id);
    res.status(200).json({ success: true, data: bollards });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

exports.ExhaustFan1GetById = async (req, res) => {
  try {
    const {id} = req.params
    const light = await ExhaustFan1.findById(id)
    res.status(200).json({ success: true, data: light });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}


exports.ExhaustFan2Post = async (req, res) => {
  try {
    const data = req.body
    const result = await ExhaustFan2.insertMany(data)
    res.send({ status: true, message: 'Data Successfully Added', data: result });
  } catch (error) {
    console.error("Error in adding data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

exports.ExhaustFan2updateBollardsData = async (req, res) => {
  try {
    const { id, ...updateData } = req.body; // Extract id separately

    if (!id) {
      return res.status(400).json({ status: false, message: "User ID is required" });
    }

    const result = await ExhaustFan2.updateOne({ _id: id }, { $set: updateData });

    if (result.modifiedCount === 0) {
      return res.status(404).json({ status: false, message: "User not found or no changes made" });
    }

    res.json({ status: true, message: "Data Successfully Updated", data: result });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};


exports.ExhaustFan1GetAll = async (req, res) => {
  try {
    const lights = await ExhaustFan1.find();
    res.status(200).json({ success: true, data: lights });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

exports.ExhaustFan1postAllLights= async (req, res) => {
  try {
    const data = req.body;

    // Using bracket notation to correctly access the fields with spaces
    const result = await ExhaustFan1.insertMany(data);

    res.send({ status: true, message: 'Data Successfully Added', data: result });

  } catch (error) {
    console.error("Error in adding data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
exports.ExhaustFan1updateLightsData = async (req, res) => {
  try {
    const { id, ...updateData } = req.body; // Extract id separately

    if (!id) {
      return res.status(400).json({ status: false, message: "User ID is required" });
    }

    const result = await ExhaustFan1.updateOne({ _id: id }, { $set: updateData });

    if (result.modifiedCount === 0) {
      return res.status(404).json({ status: false, message: "User not found or no changes made" });
    }

    res.json({ status: true, message: "Data Successfully Updated", data: result });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};


// new tubelight controller
exports.ExhaustFan3GetById = async (req, res) => {
  try {
    const {id} = req.params
    const light = await ExhaustFan3.findById(id)
    res.status(200).json({ success: true, data: light });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
}

exports.ExhaustFan3GetAll = async (req, res) => {
  try {
    const lights = await ExhaustFan3.find();
    res.status(200).json({ success: true, data: lights });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

exports.ExhaustFan3postAllLights= async (req, res) => {
  try {
    const data = req.body;

    // Using bracket notation to correctly access the fields with spaces
    const result = await ExhaustFan3.insertMany(data);

    res.send({ status: true, message: 'Data Successfully Added', data: result });

  } catch (error) {
    console.error("Error in adding data:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
exports.ExhaustFan3updateLightsData = async (req, res) => {
  try {
    const { id, ...updateData } = req.body; // Extract id separately

    if (!id) {
      return res.status(400).json({ status: false, message: "User ID is required" });
    }

    const result = await ExhaustFan3.updateOne({ _id: id }, { $set: updateData });

    if (result.modifiedCount === 0) {
      return res.status(404).json({ status: false, message: "User not found or no changes made" });
    }

    res.json({ status: true, message: "Data Successfully Updated", data: result });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
};

