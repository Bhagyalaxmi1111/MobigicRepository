var express = require('express');
let jwt = require("jsonwebtoken");
const reg = require('../controller/register.controller');
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
var router = express.Router();

router.post(
    "/", [
    check("email").isEmail().withMessage("email required"),
    check("password").isLength({ min: 5 }).withMessage("password required"),
],
    async (req, res) => {
        //Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        } else {

            console.log(req.body);
            reg.loginUser(req.body.email, async (reg) => {
                // console.log(reg);
              //  console.log(reg[0].password);
                const isSame = await bcrypt.compare(req.body.password, reg[0].password);
                
                if (!isSame) {
                    res.status(200).send({
                        error: true,
                        message: "Invalid password.",
                    });
                } else {
                    const token = jwt.sign({regid:reg[0].regid}, "Nodesession", {
                        algorithm: "HS256",
                        expiresIn: "24h",
                      });
                      reg[0].token = token;
                      res.cookie("token", token, {
                        maxAge:  1000,
                      });           
                      res.send({
                        error: false,
                        message: "logged in successfully.",
                        token:token,
                        regid:reg[0].regid,
                    });
                }
                
            });

        }
    }
);

module.exports = router;