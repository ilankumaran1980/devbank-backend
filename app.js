const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Health Check for ECS/ALB
app.get("/api/health", (req, res) => {
    res.json({
        status: "Backend Running Successfully",
        service: "DevBank API"
    });
});

app.get("/api/users", (req, res) => {
    res.json([
        { id: 1, name: "John" },
        { id: 2, name: "Sara" }
    ]);
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});
