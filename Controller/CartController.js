// // Controller/CartController.js

// const { request } = require("express");
// const CartItem = require("../Models/Cart"); // Mongoose model

// exports.getAllCartNames = async (req, res) => {
//   try {
//     // Fetch only cartName and _id fields from all documents
//     const carts = await CartItem.find({}, { cartName: 1 }).sort({ createdAt: -1 });

//     // Optional: Remove duplicates if needed
//     // const uniqueCartNames = [...new Set(carts.map(cart => cart.cartName))];

//     res.status(200).json({ cartNames: carts });
//   } catch (error) {
//     console.error("Error fetching cart names:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// exports.createCartItem = async (req, res) => {
//   try {
//     const { cartName, wallName, items } = req.body;
//     console.log(req.body)

//     // Validate basic fields
//     if (!cartName || !wallName || !Array.isArray(items) || items.length === 0) {
//       return res.status(400).json({ message: "Missing required fields or items array is empty." });
//     }

//     // Validate structure of each item
//     // const invalidItems = items.filter(item => 
//     //   !item.Model || 
//     //   typeof item.ListPrice !== "number" || 
//     //   !item.Dimensions || 
//     //   typeof item.qty !== "number"
//     // );

//     // if (invalidItems.length > 0) {
//     //   return res.status(400).json({ message: "One or more items are missing required fields or have invalid types." });
//     // }

//     // Create and save the new cart
//     const newCart = new CartItem({
//       cartName,
//       wallName,
//       items,
//       createdAt: new Date(),
//     });

//     await newCart.save();

//     res.status(201).json({ 
//       message: "Cart saved successfully", 
//       cartId: newCart._id,
//       cart: newCart 
//     });
//   } catch (error) {
//     console.error("Error saving cart:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };
// const CartItem = require("../Models/Cart"); // Mongoose model

// exports.deleteCartByName = async (req, res) => {
//   try {
//     const { name } = req.params;
//     const { wallName } = req.query;

//     const deleted = await CartItem.findOneAndDelete({ cartName: name, wallName });

//     if (!deleted) return res.status(404).json({ message: "Not found" });

//     res.status(200).json({ message: "Deleted successfully" });
//   } catch (err) {
//     console.error("Delete error:", err);
//     res.status(500).json({ message: "Server error" });
//   }
// };


// // ✅ Create & Save a new cart
// exports.createOrUpdateCartItem = async (req, res) => {
//   try {
//     const { cartName, wallName, items } = req.body;

//     if (!cartName || !wallName || !Array.isArray(items) || items.length === 0) {
//       return res.status(400).json({ message: "Missing required fields or items array is empty." });
//     }

//     const existingCart = await CartItem.findOne({ cartName });

//     if (existingCart) {
//       // ✅ Update existing cart
//       existingCart.wallName = wallName;
//       existingCart.items = items;
//       await existingCart.save();

//       return res.status(200).json({ message: "Cart updated successfully", cart: existingCart });
//     } else {
//       // ✅ Create new cart
//       const newCart = new CartItem({ cartName, wallName, items });
//       await newCart.save();

//       return res.status(201).json({ message: "Cart created successfully", cart: newCart });
//     }
//   } catch (error) {
//     console.error("Error saving cart:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };


// // ✅ Get all cart names (for dropdowns, selection, etc.)
// exports.getAllCartNames = async (req, res) => {
//   try {
//     const carts = await CartItem.find({}, { cartName: 1 }).sort({ createdAt: -1 });

//     // Remove duplicate names if needed
//     const uniqueCartNames = [...new Set(carts.map(cart => cart.cartName))];

//     res.status(200).json({ cartNames: uniqueCartNames });
//   } catch (error) {
//     console.error("Error fetching cart names:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// // ✅ Get full cart by its name
// exports.getCartByName = async (req, res) => {
//   try {
//     const { name } = req.params;
//     const cart = await CartItem.findOne({ cartName: name });

//     if (!cart) {
//       return res.status(404).json({ message: "Cart not found" });
//     }

//     res.status(200).json(cart);
//   } catch (error) {
//     console.error("Error fetching cart by name:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// // ✅ Get all saved carts with details (cartName, wallName, items)
// exports.getAllCarts = async (req, res) => {
//   try {
//     const carts = await CartItem.find().sort({ createdAt: -1 });
//     res.status(200).json({ carts });
//   } catch (error) {
//     console.error("Error fetching all carts:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

const CartItem = require("../Models/Cart");

// ✅ Create or Update Cart (per cartName + wallName)
// Create or update wall-specific data under a cart name
// exports.createOrUpdateCartItem = async (req, res) => {
//   try {
//     const { cartName, items } = req.body;

//     if (!cartName || !Array.isArray(items)) {
//       return res.status(400).json({ message: "Missing cartName or items." });
//     }

//     const existingCart = await CartItem.findOne({ cartName });

//     if (existingCart) {
//       existingCart.items = items;
//       await existingCart.save();
//       return res.status(200).json({ message: "Cart updated", cart: existingCart });
//     } else {
//       const newCart = new CartItem({ cartName, items });
//       await newCart.save();
//       return res.status(201).json({ message: "New cart created", cart: newCart });
//     }
//   } catch (error) {
//     console.error("Save error:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };
exports.createOrUpdateCartItem = async (req, res) => {
  try {
    const { cartName, items, address, contact } = req.body;

    if (!cartName) {
      return res.status(400).json({ message: "Missing cartName." });
    }

    // Process items to ensure they have all required fields
    const processedItems = Array.isArray(items) ? items.map(item => ({
      Model: item.Model || '',
      ListPrice: item.ListPrice || '',
      Dimensions: item.Dimensions || '',
      qty: item.qty || 1,
      remark: item.remark || '' // Ensure remark exists
    })) : [];

    const updateData = {
      items: processedItems,
      address: address || '',
      contact: contact || '',
      updatedAt: new Date()
    };

    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    const cart = await CartItem.findOneAndUpdate(
      { cartName },
      updateData,
      options
    );

    const status = cart ? 200 : 201;
    const message = cart ? "Cart updated" : "New cart created";
    res.status(status).json({ message, cart });
    
  } catch (error) {
    console.error("Save error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};



// ✅ Get all unique cart names
exports.getAllCartNames = async (req, res) => {
  try {
    const carts = await CartItem.aggregate([
      { $group: { _id: "$cartName" } },
      { $sort: { _id: -1 } }
    ]);
    const uniqueNames = carts.map(c => c._id);
    res.status(200).json({ cartNames: uniqueNames });
  } catch (error) {
    console.error("Error fetching cart names:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


// ✅ Get all carts (used in CartsPage)
exports.getAllCarts = async (req, res) => {
  try {
    const carts = await CartItem.find().sort({ createdAt: -1 });
    res.status(200).json({ carts });
  } catch (error) {
    console.error("Error fetching all carts:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// ✅ Get cart by cartName + wallName
// ✅ GET only wall-specific cart data
// exports.getCartByNameAndWall = async (req, res) => {
//   try {
//     const { name } = req.params;
//     const { wallName } = req.query;

//     const cart = await CartItem.findOne({ cartName: name, wallName });

//     if (!cart) {
//       return res.status(404).json({ message: "Cart not found for this wall" });
//     }

//     res.status(200).json(cart);
//   } catch (error) {
//     console.error("Error fetching wall cart:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };
// ✅ Get all items for a cartName (MERGED across walls)
exports.getCartByName = async (req, res) => {
  try {
    const { name } = req.params;
    const cart = await CartItem.findOne({ cartName: name });

    if (!cart) {
      return res.status(404).json({ message: "No cart found for this name" });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error("Error fetching cart by name:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};



// ✅ Delete cart by cartName + wallName
exports.deleteCartByName = async (req, res) => {
  try {
    const { name } = req.params;

    const deleted = await CartItem.findOneAndDelete({ cartName: name });

    if (!deleted) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

