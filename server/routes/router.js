const express = require("express");
const router = new express.Router();
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");

// Register the data
router.post("/register", async (req, res) => {
    const { fname, email, mobile, password, cpassword } = req.body;

    if (!fname || !email || !mobile || !password || !cpassword) {
        return res.status(422).json({ error: "Fill all the data" });
    }

    try {
        const preuser = await User.findOne({ email: email });

        if (preuser) {
            return res.status(422).json({ error: "This user already exists" });
        } else if (password !== cpassword) {
            return res.status(422).json({ error: "Passwords are not matching" });
        } else {
            const finaluser = new User({
                fname,
                email,
                mobile,
                password
            });

            // Save user with hashed password
            await finaluser.save();
            res.status(201).json({ message: "User successfully registered" });
        }
    } catch (error) {
        res.status(422).json({ error: "Error during registration" });
    }
});

// Login data
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Fill all the data" });
    }

    try {
        const userlogin = await User.findOne({ email: email });
        console.log(userlogin+" user value");
        if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);
            //console.log(isMatch)
            const token = await userlogin.generatAuthtoken();
            //console.log(token);
            res.cookie("eccomerce", token, {
                expires: new Date(Date.now() + 2589000),
                httpOnly: true
            })
            if (!isMatch) {
                return res.status(400).json({ error: "Invalid details" });
            } else {
                return res.status(201).json(userlogin);
            }
        } else {
            return res.status(400).json({ error: "Invalid credentials" });
        }
    } catch (error) {
        res.status(400).json({ error: "Error during login" });
    }
});

module.exports = router;
