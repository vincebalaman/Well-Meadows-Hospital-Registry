import express from "express";
import cors from "cors";

import movieRoutes from "./routes/patientRoutes.js";

const app = express();
const PORT = 5001;

app.use(cors());

app.use("/patients", movieRoutes);

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});


