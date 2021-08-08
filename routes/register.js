var express = require("express");
const reg = require("../Controller/register.controller");
const bcrypt = require("bcrypt");
let Middleware = require('../Middleware/Middleware');
const { check, validationResult } = require("express-validator");
var router = express.Router();

router.post(
  "/",
  [check("email").isEmail().withMessage("email required"),
  check("password").isLength({ min: 8, max: 15 }).withMessage("password required"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(req.body.password, salt);
      req.body.hash = hash;
      reg.Newregistration(req.body, (reg) => {
        if (reg.affectedRows > 0) {
          res.status(200).send({ error: false, message: "Registration done successfully" });
        }
      });
    }
  }
);

module.exports = router;
