const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose")
const register = require("./routes/register");
const swaggerUI = require("swagger-ui-express")
const specs = require("./helpers/swagger")
require("dotenv").config()


app.use(express.json())
app.use(cors())
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))
app.use("/api/student",register)



const start = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log("connected to database");
      app.listen(process.env.PORT, () => {
        console.log("server is running");
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  
  start();
  