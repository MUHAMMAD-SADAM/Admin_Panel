// Home_page Logic

const home = async (req, res) => {
  try {
    res.status(200).send("Welcome to the home page");
  } catch (error) {
    res.status(400).send({ msg: "Page not found" });
  }
};

// Registration_page Logic

const reg = async (req, res) => {
  try {
    res.status(200).send("Welcome to he Registration page");
  } catch (error) {
    res.status(400).send({ msg: "Page not found" });
  }
};

module.exports = { home, reg };
// All import into auth_router.js
