
const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;


// ===============================
// MIDDLEWARE
// ===============================

app.use(cors());
app.use(express.json());


// ===============================
// MONGODB
// ===============================

const client = new MongoClient(process.env.MONGO_URI, {
  family: 4,
  tls: true,
});


// ===============================
// CONTACT ROUTES
// ===============================

const contactRoutes = require("./contactRoutes");


// ===============================
// HOME ROUTE
// ===============================

app.get("/", (req, res) => {
  res.json({
    message: "Marwa's Portfolio Backend is running 🚀",
    status: "success",
  });
});


// ===============================
// START SERVER
// ===============================

async function startServer() {
  try {

    await client.connect();

    const db = client.db("marwa_portfolio");

    app.locals.db = db;

    console.log("MongoDB connected successfully ✅");


    // Contact API
    app.use("/api", contactRoutes);


    // Start Express server
    app.listen(PORT, "0.0.0.0", () => {
      console.log(
        `Server running on http://localhost:${PORT}`
      );
    });

  } catch (error) {

    console.error("MongoDB connection failed ❌");
    console.error(error);

  }
}


// IMPORTANT:
// startServer() belongs ONLY in server.js

startServer();

