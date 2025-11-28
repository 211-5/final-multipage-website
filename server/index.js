const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// Login route
app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "test@example.com" && password === "123456") {
    return res.json({ message: "Login successful" });
  }

  return res.status(400).json({ message: "Invalid login" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
