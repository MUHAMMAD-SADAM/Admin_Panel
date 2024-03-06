const User = require("../models/user_model");

// Home_page Logic

const home = async (req, res) => {
  try {
    console.log(req.body);
    const data = req.body;
    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};

// Registration_page Logic

const reg = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;
    const UserExist = await User.findOne({ email });
    if (UserExist) {
      return res.status(200).json({ msg: "Email Already Exist" });
    }

    const UserCreated = await User.create({
      username,
      email,
      phone,
      password,
    });
    res.status(200).json({ msg: UserCreated });
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};

module.exports = { home, reg };
// All import into auth_router.js
