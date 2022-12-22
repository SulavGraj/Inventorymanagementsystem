const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT ||3000; 

//CONNECT TO DB AND START SERVER
mongoose.set("strictQuery", false);
mongoose
        .connect(process.env.MONGO_URI)
        .then(() => {
            app.listen(PORT, () => {
            console.log(`server running on port ${PORT}`);
            });
        })

        .catch((err) => console.log(err));