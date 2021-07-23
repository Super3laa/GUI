var express = require("express");
var router = express.Router();
const writeData = require("../utils/data").writeData;
const readData = require("../utils/data").readData;
const isValidPassword = require('../utils/data').isValidPassword;

router.get("/", async function (req, res) {
  res.send(readData());
});

router.post("/", async function (req, res) {
  try {
    writeData(req.body);
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(403);
  }
});

router.post("/login", async function (req, res) {
  try {
    if(!isValidPassword(req.body.password)) return res.sendStatus(403);
    writeData({
      is_user_auth: 1,
      ble: 0,
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(403);
  }
});

module.exports = router;
