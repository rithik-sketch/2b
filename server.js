require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json(), express.static("."));

const Student = mongoose.model("Student", {
    name: { type: String, required: true },
    dept: { type: String, required: true }
});

app.get("/students", async (req, res) => {
    try { res.json(await Student.find().sort({ _id: -1 })); }
    catch (err) { console.error(err); res.sendStatus(500); }
});

app.post("/save", async (req, res) => {
    try { res.status(201).json(await Student.create(req.body)); }
    catch (err) { console.error(err); res.sendStatus(400); }
});

mongoose.connect(process.env.MONGODB_URI)
    .then(() => app.listen(process.env.PORT || 4000, () => console.log("MongoDB connected")))
    .catch(err => { console.error("MongoDB connection failed:", err.message); process.exit(1); });
