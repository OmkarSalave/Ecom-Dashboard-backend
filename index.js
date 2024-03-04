const express = require("express");
var cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors("*"));
const dashboard = require("./mock_data/dashboard.json");
const product = require("./mock_data/productsale.json");
const profit = require("./mock_data/profit.json");
const upperKpi = require("./mock_data/upper-kpis.json");
const user = require("./mock_data/user-analytics.json");

app.get("/", (req, res) => {
  return res.status(200).send("Hello my first backen app");
});

app.get("/dashboard", (req, res) => {
  try {
    return res.status(200).send(dashboard);
  } catch (error) {
    throw res.send(error);
  }
});

app.get("/product", (req, res) => {
  try {
    return res.status(200).send(product);
  } catch (error) {
    throw res.send(error);
  }
});

app.get("/profit", (req, res) => {
  try {
    return res.status(200).send(profit);
  } catch (error) {
    throw res.send(error);
  }
});

app.get("/upper-kpis", (req, res) => {
  try {
    return res.status(200).send(upperKpi);
  } catch (error) {
    throw res.send(error);
  }
});

app.get("/users", (req, res) => {
  try {
    return res.status(200).send(user);
  } catch (error) {
    throw res.send(error);
  }
});

const port = 4000;
app.listen(port);
