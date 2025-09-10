const User = require("../Models/User");
const nodemailer = require("nodemailer");

// ⚠️ Hardcoded Gmail + App Password
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "msoelectrcials@gmail.com",   // your Gmail
    pass: "gmbyqmkfvriyquxv",                   // your 16-char App Password
  },
});

// Generate OTP and send email
exports.sendOTP = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user with credentials
    const user = await User.findOne({ username, password });
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    // Save OTP to user
    user.otp = otp;
    user.otpExpires = otpExpires;
    await user.save();

    // Send OTP via email
    const mailOptions = {
      from: "msoelectrcials@gmail.com",
      to: user.email, // must exist in DB
      subject: "Your OTP Code",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Your OTP Code</h2>
          <p>Use the following OTP to complete your login:</p>
          <div style="background: #f4f4f4; padding: 20px; text-align: center; font-size: 24px; letter-spacing: 5px; margin: 20px 0;">
            <strong>${otp}</strong>
          </div>
          <p>This OTP will expire in 10 minutes.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: "OTP sent to your email" });
  } catch (error) {
    console.error("Send OTP error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Verify OTP
exports.verifyOTP = async (req, res) => {
  try {
    const { username, otp } = req.body;

    const user = await User.findOne({
      username,
      otp,
      otpExpires: { $gt: new Date() }, // OTP not expired
    });

    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid or expired OTP" });
    }

    // Clear OTP after successful verification
    user.otp = null;
    user.otpExpires = null;
    await user.save();

    res.json({ success: true, message: "Login successful" });
  } catch (error) {
    console.error("Verify OTP error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
