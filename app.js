const http = require("http");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || process.env.API_PORT;
const customerRoute = require('./routes/customer');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/customerview', customerRoute)

const server = http.createServer(app);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`server is conneted on port number ${PORT}...`);
    });
  })
  .catch((error) => {
    console.log("Mongoose not connected");
    console.log(error);
  });
