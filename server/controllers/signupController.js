const signup = require("../model/signup");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret = "Bhashya";

const Signups = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const sign = await signup.findOne({ email: email });

    const hashpassword = await bcrypt.hash(password, 10);

    if (sign) {
      res.status(400).json({ message: "user already exists" });
    } else {
      const user = await signup.create({
        name,
        email,
        password: hashpassword,
      });
      if (user) {
        res.status(200).json({ message: "user registered successfully" });
        console.log("Registration success");
      } else {
        res.status(400).json({ message: "Error while regestering" });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const Logins = async (req, res) => {
  const { email, password } = req.body;
  try {
    const login = await signup.findOne({ email: email });

    if (!login || !(await bcrypt.compare(password, login.password))) {
      res.status(400).json({ message: "invalid mail or password" });
    } else {
      const token = await jwt.sign({ userId: login._id }, secret, {
        expiresIn: "30h",
      });
      res.status(200).json({ message: "user login successful", token });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { Signups, Logins };   