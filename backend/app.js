const express = require('express');
const app = express();
const path = require('path');
const helmet = require("helmet");
const mongoSanitize = require('express-mongo-sanitize');
//require('dotenv').config();

const db = require("./models/index");
db.sequelize.sync({ force: true }).then(() => {
  console.log("Synced to DB !");
});

//Pouvoir effectuer les requètes trans-serveur (host:3000 et host:4200)
app.use((req, res, next) => 
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.setHeader("Access-Control-Allow-Credentials", "true");
  //gestion du preflight, à recontrôler avant mise en production
  if (req.method === "OPTIONS") 
  {
    return res.status(200).end();
  }
  return next();
});

//equivalent body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//protection contre injections
app.use(mongoSanitize());

//files path
const clientProfileRoads = require('./roads/profiles')

//API path
app.use('/api/profile', helmet(), clientProfileRoads);

module.exports = app;