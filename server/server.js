require("dotenv").config();
const express = require("express");
const { route } = require("./router/auth_router");
const app = express();
const router = require("./router/auth_router");
const connectDb = require("./utilities/db");
app.use(express.json());
app.use("/api/auth", router);
// Middleware for parsing JSON data in req.body

const PORT = 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running on port : ${PORT}`);
  });
});
