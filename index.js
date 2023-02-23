const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const bookRoutes = require("./routes/bookRoutes")
const categoryRoutes = require("./routes/CategoryRoutes")
const ApiCalled = require("./middlewares/ApiCalled")

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
app.use(express.static('uploads/BookImage'))
app.use(cookieParser());
app.use(ApiCalled)
app.use("/", authRoutes);
app.use("/book" , bookRoutes)
app.use("/category" , categoryRoutes)