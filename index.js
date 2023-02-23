const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
<<<<<<< HEAD
const bookRoutes = require("./routes/bookRoutes");
const categoryRoutes=require("./routes/categoryRoutes");

=======
const bookRoutes = require("./routes/bookRoutes")
const categoryRoutes = require("./routes/CategoryRoutes")
const ApiCalled = require("./middlewares/ApiCalled")
>>>>>>> 7a2884fd4027bdd0376a829e8e070bd4c7124d88

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
<<<<<<< HEAD
app.use("/book" , bookRoutes);
app.use("/category",categoryRoutes);
=======
app.use("/book" , bookRoutes)
app.use("/category" , categoryRoutes)

>>>>>>> 7a2884fd4027bdd0376a829e8e070bd4c7124d88
