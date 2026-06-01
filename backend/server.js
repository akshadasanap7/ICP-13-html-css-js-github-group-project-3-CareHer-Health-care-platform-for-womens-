const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, "..")));

// ─── Helpers ────────────────────────────────────────────────────────────────
const dataPath = (file) => path.join(__dirname, "data", file);

function readJSON(file) {
  if (!fs.existsSync(dataPath(file))) return [];
  const content = fs.readFileSync(dataPath(file), "utf-8").trim();
  return content ? JSON.parse(content) : [];
}

function writeJSON(file, data) {
  fs.writeFileSync(dataPath(file), JSON.stringify(data, null, 2));
}

// ─── SIGNUP ─────────────────────────────────────────────────────────────────
app.post("/api/signup", (req, res) => {
  const { firstName, lastName, age, email, contact, password } = req.body;

  if (!firstName || !lastName || !age || !email || !contact || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const users = readJSON("users.json");
  if (users.find((u) => u.email === email)) {
    return res.status(409).json({ error: "Email already registered" });
  }

  const user = { id: Date.now(), firstName, lastName, age, email, contact, password, createdAt: new Date().toISOString() };
  users.push(user);
  writeJSON("users.json", users);

  const { password: _, ...safeUser } = user;
  res.status(201).json({ message: "Signup successful", user: safeUser });
});

// ─── LOGIN ───────────────────────────────────────────────────────────────────
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const users = readJSON("users.json");
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ error: "Invalid email or password" });
  }

  const { password: _, ...safeUser } = user;
  res.json({ message: "Login successful", user: safeUser });
});

// ─── REVIEWS ─────────────────────────────────────────────────────────────────
app.get("/api/reviews", (req, res) => {
  res.json(readJSON("reviews.json"));
});

app.post("/api/reviews", (req, res) => {
  const { name, date, rating, comment } = req.body;

  if (!name || !date || !rating) {
    return res.status(400).json({ error: "Name, date and rating are required" });
  }

  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
  const review = { id: Date.now(), name, date, stars, comment: comment || "", createdAt: new Date().toISOString() };

  const reviews = readJSON("reviews.json");
  reviews.push(review);
  writeJSON("reviews.json", reviews);

  res.status(201).json({ message: "Review submitted", review });
});

app.delete("/api/reviews/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const reviews = readJSON("reviews.json");
  const updated = reviews.filter((r) => r.id !== id);

  if (updated.length === reviews.length) {
    return res.status(404).json({ error: "Review not found" });
  }

  writeJSON("reviews.json", updated);
  res.json({ message: "Review deleted" });
});

// ─── APPOINTMENTS ─────────────────────────────────────────────────────────────
app.get("/api/appointments", (req, res) => {
  res.json(readJSON("appointments.json"));
});

app.post("/api/appointments", (req, res) => {
  const { name, email, age, doctor, date, time, symptoms, description } = req.body;

  if (!name || !email || !age || !doctor || !date || !time) {
    return res.status(400).json({ error: "All required fields must be filled" });
  }

  const appointment = {
    id: Date.now(), name, email, age, doctor, date, time,
    symptoms: symptoms || [],
    description: description || "",
    createdAt: new Date().toISOString()
  };

  const appointments = readJSON("appointments.json");
  appointments.push(appointment);
  writeJSON("appointments.json", appointments);

  res.status(201).json({ message: "Appointment booked", appointment });
});

app.delete("/api/appointments/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const appointments = readJSON("appointments.json");
  const updated = appointments.filter((a) => a.id !== id);

  if (updated.length === appointments.length) {
    return res.status(404).json({ error: "Appointment not found" });
  }

  writeJSON("appointments.json", updated);
  res.json({ message: "Appointment deleted" });
});

// ─── START ───────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`CareHer backend running at http://localhost:${PORT}`);
});
