// const User = require("../Models/User");
// const nodemailer = require("nodemailer");

// // ⚠️ Hardcoded Gmail + App Password
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "otpsystem.lightpanel@gmail.com",   // your Gmail
//     pass: "vzvzmlbcyxbjpoze",                // your 16-char App Password
//   },
// });

// // Generate OTP and send email
// exports.sendOTP = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // Find user with credentials
//     const user = await User.findOne({ username, password });
//     if (!user) {
//       return res.status(401).json({ success: false, message: "Invalid credentials" });
//     }

//     // Generate 6-digit OTP
//     const otp = Math.floor(100000 + Math.random() * 900000).toString();
//     const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

//     // Save OTP to user
//     user.otp = otp;
//     user.otpExpires = otpExpires;
//     await user.save();

//     // Send OTP via email
//     const mailOptions = {
//       from: "otpsystem.lightpanel@gmail.com",
//       to: "otpsystem.lightpanel@gmail.com", // must exist in DB
//       subject: "Your OTP Code",
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <h2>Your OTP Code</h2>
//           <p>Use the following OTP to complete your login:</p>
//           <div style="background: #f4f4f4; padding: 20px; text-align: center; font-size: 24px; letter-spacing: 5px; margin: 20px 0;">
//             <strong>${otp}</strong>
//           </div>
//           <p>This OTP will expire in 10 minutes.</p>
//         </div>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     res.json({ success: true, message: "OTP sent to your email" });
//   } catch (error) {
//     console.error("Send OTP error:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

// // Verify OTP
// exports.verifyOTP = async (req, res) => {
//   try {
//     const { username, otp } = req.body;

//     const user = await User.findOne({
//       username,
//       otp,
//       otpExpires: { $gt: new Date() }, // OTP not expired
//     });

//     if (!user) {
//       return res.status(401).json({ success: false, message: "Invalid or expired OTP" });
//     }

//     // Clear OTP after successful verification
//     user.otp = null;
//     user.otpExpires = null;
//     await user.save();

//     res.json({ success: true, message: "Login successful" });
//   } catch (error) {
//     console.error("Verify OTP error:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };
const User = require("../Models/User");
const { Resend } = require("resend");

// Option 1 (secure): load API key from environment
// const resend = new Resend(process.env.RESEND_API_KEY);

// ❌ Option 2 (not secure, but works if ENV fails):
const resend = new Resend("re_3JaWEmBM_9PbriNgpcXbcPTmefgv6b2Xf");

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

    // Send OTP via Resend
    await resend.emails.send({
      from: "LightPanel <onboarding@resend.dev>", // Resend free plan requires this
      to: "otpsystem.lightpanel@gmail.com",       // Always send to your Gmail
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
    });

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
