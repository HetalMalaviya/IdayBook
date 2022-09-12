const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/Fetchuser");
const Notes = require("../models/Notes.js");
const { body, validationResult } = require("express-validator");

router.get("/fetchnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user });

    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("error occured");
  }
});

router.post(
  "/addnotes",
  [
    body("title").isLength({ min: 5 }),
    body("description").isLength({ min: 3 }),
  ],
  fetchuser,
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNotes = await note.save();

      res.json(savedNotes);
    } catch (error) {
      console.log(error.message);
      res.status(500).send("error occured");
    }
  }
);
router.put("/updatenotes/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    const newNote = {};
    if (title) {
      newNote.title = title;
    }
    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }

    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(400).send("error occured");
    }

    if (note.user !== req.user.id.parseInt) {
      return res.status(401).json("user not allowed");
    }

    note = await Notes.findByIdAndUpdate(
      req.params.id,
      { $set: newNote },
      { new: true }
    );
    res.json(note);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("error occured");
  }
});

router.delete("/deletenotes/:id", fetchuser, async (req, res) => {
  const { title, description, tag } = req.body;
  try {
    let note = await Notes.findById(req.params.id);
    if (!note) {
      return res.status(400).send("error occured");
    }

    if (note.user !== req.user.id.parseInt) {
      return res.status(401).json("user not allowed");
    }

    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ success: "note delete", note: note });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("error occured");
  }
});
module.exports = router;
