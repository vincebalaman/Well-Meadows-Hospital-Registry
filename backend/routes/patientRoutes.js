import express from "express";
import cors from "cors";

const router = express.Router();

router.get("/patientlist", (req, res) => {
    res.json({message: "List of patients"});
});

export default router;