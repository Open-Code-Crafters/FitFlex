import express from "express";
const router = express.Router();
import { getNewsletter, saveNewsletter } from "../controller/newsletterController.js";

router.post("/suscribe", saveNewsletter);
router.get("/getNewsletter", getNewsletter);

export default router;
