//regtister
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../model/User");
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const hashPassword = await bycrypt.hash(password, 12);
    const newUser = new User({
      userName,
      email,
      password : hashPassword,
    });
    await newUser.save();
    res.status(200).json({
      sucess: true,
      message: "Registration Succesful",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      sucess: false,
      message: "Some error Occured",
    });
  }
};

//login
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
  } catch (e) {
    console.log(e);
    res.status(500).json({
      sucess: false,
      message: "Some error Occured",
    });
  }
};

//logout


module.exports = {registerUser};