
const express = require("express");
const { ObjectId } = require("mongodb");

const router = express.Router();


// ===============================
// POST - SAVE CONTACT MESSAGE
// ===============================

router.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields.",
      });
    }

    const db = req.app.locals.db;

    const contact = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      createdAt: new Date(),
    };

    await db.collection("contacts").insertOne(contact);

    res.status(201).json({
      success: true,
      message: "Message sent successfully! 🚀",
    });

  } catch (error) {
    console.error("POST CONTACT ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong while sending the message.",
    });
  }
});


// ===============================
// GET - ALL CONTACT MESSAGES
// ===============================

router.get("/contact", async (req, res) => {
  try {
    const db = req.app.locals.db;

    const contacts = await db
      .collection("contacts")
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    res.status(200).json({
      success: true,
      count: contacts.length,
      contacts,
    });

  } catch (error) {
    console.error("GET CONTACT ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch messages.",
    });
  }
});


// ===============================
// DELETE - ONE CONTACT MESSAGE
// ===============================

router.delete("/contact/:id", async (req, res) => {
  try {
    const db = req.app.locals.db;

    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid message ID.",
      });
    }

    const result = await db.collection("contacts").deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Message not found.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Message deleted successfully.",
    });

  } catch (error) {
    console.error("DELETE CONTACT ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Unable to delete message.",
    });
  }
});


module.exports = router;

