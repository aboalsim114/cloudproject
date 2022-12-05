// import libraies
const express = require("express");
const mongoose = require("mongoose");
const port = 3001;
const app = express();
const teamsRouter = require("./routes/teams");


//Middleware

app.use("/teams", teamsRouter);


// Routes 
app.get("/", (req, res) => {
    res.send("Homepage");
})



const MURL = "mongodb+srv://sami:1234@cluster0.p6wwavj.mongodb.net/cloudproject?retryWrites=true&w=majority";
mongoose.connect(MURL);

const db = mongoose.connection;

db.on("connected", () => {
    console.log("connected to the database");
})


db.on("disconnected", () => {
    console.log("disconnected to the database");
})

// start server
app.listen(port, () => console.log(`the server is running on port : ${port}`));