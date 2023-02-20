const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const bookRoutes = require("./routes/BookRoutes")

const app = express();
//----server setting-----//
require("dotenv").config();
mongoose
  .connect(process.env.mongo_url, { dbName: "db_node_Project" })
  .then((result) =>
    app.listen(process.env.Port, function () {
      console.log("Server is starting");
    })
  )
  .catch((error) => console.log(error));


app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads/ProfileImage'))
app.use(cookieParser());
app.use("/", authRoutes);
app.use("/book" , bookRoutes)
