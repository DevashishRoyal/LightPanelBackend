// const { networkInterfaces } = require("os");

// // Allowed MAC addresses (normalized)
// const allowedMACs = [
//     "AC:86:A3:D4:AA:7F",
//     "04:13:7A:88:83:0E",
//     "40:DE:24:41:22:86",
//     "24:6A:0E:CA:2C:F2",
//     "B4:8C:9D:E8:DE:67"
//     // B4-8C-9D-E8-DE-67
// ];

// // Function to get the client's MAC address
// const getClientMAC = () => {
//     const nets = networkInterfaces();
//     let mac = null;

//     Object.values(nets).forEach((net) => {
//         net.forEach((info) => {
//             if (!info.internal && info.mac !== "00:00:00:00:00:00") {
//                 mac = info.mac.toUpperCase().replace(/-/g, ":"); // Normalize format
//             }
//         });
//     });

//     return mac;
// };

// // Middleware to check MAC address
// const macAuthMiddleware = (req, res, next) => {
//     const clientMAC = getClientMAC();

//     if (!clientMAC || !allowedMACs.includes(clientMAC)) {
//         return res.status(403).json({ message: "Access Denied: Unauthorized MAC Address" });
//     }

//     next();
// };

// module.exports = macAuthMiddleware;

const Fingerprint = require("../Models/FingerPrintSchema");

const fingerprintAuthMiddleware = async (req, res, next) => {
  const fingerprint = req.headers["x-device-fingerprint"];
console.log(fingerprint);

  if (!fingerprint) {
    return res.status(401).json({ allowed: false, message: "No fingerprint provided" });
  }

  try {
    const fingerprintExists = await Fingerprint.findOne({ fingerprint });

    if (!fingerprintExists) {
      return res.status(403).json({ allowed: false, message: "Unauthorized device" });
    }

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({ allowed: false, message: "Database error" });
  }
};

// exports.addNewFingerprint = async (req, res) => {
//     try {
//       const data = req.body;
  
//       // Using bracket notation to correctly access the fields with spaces
//       const result = await Fingerprint.insertOne(data);
  
//       res.send({ status: true, message: 'Data Successfully Added', data: result });
  
//     } catch (error) {
//       console.error("Error in adding data:", error);
//       res.status(500).json({ success: false, message: "Server Error" });
//     }
//   };    
module.exports = fingerprintAuthMiddleware;
