require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();
const port = 8005;

require("./db/conn");
const products = require("./models/productsSchema");
const DefaultData = require("./defaultdata");
const cors =require("cors");
const router = require("./routes/router");


app.use(express.json());
app.use(cookieParser(""));
app.use(cors());
app.use(router);
app.listen(port,()=>{
    console.log(`your server is running on port ${port} `);
});

DefaultData();