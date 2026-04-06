import express from "express";
import cors from "cors";

const router = express.Router();

router.get("/patientlist", (req, res) => {
    res.json({message: "Get list of patients"});
});

router.post("/patientlist", (req, res) => {
    res.json({message: "Post list of patients"});
});

router.put("/patientlist", (req, res) => {
    res.json({message: "Put list of patients"});
});

router.delete("/patientlist", (req, res) => {
    res.json({message: "Delete list of patients"});
});

export default router;