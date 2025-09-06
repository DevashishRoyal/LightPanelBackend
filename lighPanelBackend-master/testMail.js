require("dotenv").config();
const nodemailer = require("nodemailer");

(async () => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "your-personal-email@gmail.com", // put your email here
      subject: "✅ Test Mail",
      text: "If you see this, Gmail SMTP works!",
    });

    console.log("✅ Mail sent:", info.response);
  } catch (err) {
    console.error("❌ Error sending mail:", err);
  }
})();
