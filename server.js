const express = require("express");
const listEndpoints = require("express-list-endpoints");
const bodyParser = require("body-parser");
const session = require("express-session");
const routes = require("./routes");
const path = require("path");
const app = express();
const morgan = require("morgan");

const PORT = process.env.PORT || 8080;
const db = require("./models");