const mongoose = require("mongoose");


const DB = process.env.DATABASE;
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.log("Error: " + error.message));

