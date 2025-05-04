const express=require("express");
const db=require("./db");
const app=express();
const cookie=require("cookie-parser");

const PORT= 4000;
app.use("/frontend",express.static(__dirname,"../frontend/tracker.js"))
app.use("/frontend",express.static(__dirname,"../frontend/login.css"))
app.set("view engine","ejs");
app.set("views","./views");
app.use(cookie());
app.use(express.json());
db.getConnection((err)=>{
    if(err)throw err;
    console.log("database connected");
})
app.listen(PORT);
