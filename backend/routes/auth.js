const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",
  [
    body("name").isLength({ min: 5 }),
    body("email").isEmail(),
    body("password").isLength({ min: 8 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      async function someFunc() {
        let user = await User.findOne({ email: req.body.email });

        if (user) {
          return res
            .status(400)
            .json({ error: "sorry email is already exits" });
        }
        user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        });
        // .then((user) => res.json(user))
        // .catch((err) => {
        //   console.log(err);
        //   res.json({ error: "please enter valid data", message: err.message });
        // });
        res.json(user);
      }

      someFunc();
    } catch (error) {
      console.log(error.message);
      res.status(500).send("error occured");
    }
  }
);

module.exports = router;
