import express from "express";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import cors from "cors";
import newsletterRoutes from "./routes/newsletterRoute.js";



dotenv.config();
const app = express();
connectDB();

app.use(express.json());

// To avoid cross-origin error
app.use(cors());

// Use the imported routes
app.use("/api/newsletter", newsletterRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
