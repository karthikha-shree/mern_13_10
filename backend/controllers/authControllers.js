const bcrpyt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send({ message: "User already exists" });
        }

        const hashedPassword = await bcrpyt.hash(password, 10); //10 means the hashshing cycle strenght now it happens 2 power 10 timer 

        const user = await User.create({
            name,
            email,
            password: hashedPassword

        });
    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }
    res.status(201).json({ message: "User registered successfully", user });

}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: "Email do not exists please enter the correct email " });

        }
        const isPasswordCorrect = await bcrpyt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign(
            { userId: existingUser._id },
            process.env.JWT_SECRET,
            { expiresIn: '2d' }
        );
        res.status(200).json({ message: "Login successful", token });

    } catch (err) {
        return res.status(500).json({ message: "Internal server error" });
    }


}
