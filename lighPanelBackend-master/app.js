const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()
const routers = require("./router")
// const fingerprintAuthMiddleware = require("./middlewares/macAuth")
require('dotenv').config()
// const Fingerprint = require("./Models/FingerPrintSchema")
const allowedOrigins = [
    "http://localhost:5173",
    "https://lightpanel-new.netlify.app",
    "https://lightpanelnew.netlify.app"

];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
const port = process.env.PORT
// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Middleware to parse URL-encoded data (optional but useful)    
app.use(express.urlencoded({ extended: true }));
app.use('/api', routers)

// app.get("/api/auth/validate-mac", fingerprintAuthMiddleware, (req, res) => {
//     res.json({ allowed: true, message: "Access Granted: MAC Address Authorized" });
// });

// app.post("/api/auth/add-fingerprint", async (req, res) => {
//     try {
//         const data = req.body;
//         const result = await Fingerprint.create(data);
//         res.send({ status: true, message: 'Data Successfully Added', data: result });
//     } catch (error) {
//         console.error("Error in adding data:", error);
//         res.status(500).json({ success: false, message: "Server Error" });
//     }
// });

app.get('/', (req, res) => {
    res.send('Hello World')
})
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
})



    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.error('Error connecting to MongoDB', error);
    });
    
app.listen(port, () => {
    console.log(`server is running on port ${port}`);

})
console.log("Email User:", process.env.EMAIL_USER);
console.log("Email Pass:", process.env.EMAIL_PASS ? "Loaded ✅" : "Not Loaded ❌");
