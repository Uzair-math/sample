const express = require("express");
const app = express();
const Router = require("./routes/route")
const mongoose = require("mongoose");
const port = 3000;
app.use(express.json());

app.use("/route", Router, (req,res)=>{
    res.send(404).json({
        success: false,
        message:"page not found this server"
    })
})

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
const User = mongoose.model("User", UserSchema, "User List");



(async function connnect_BD() {
    await mongoose.connect("mongodb+srv://Muhammaduzair:Uzair123@cluster0.73cemxn.mongodb.net/", { useNewUrlParser: true })
    .then(() => {


        app.listen(port, () => {
            console.log("DB is connect" + port );
        });
    })
    .catch((err) => {
        console.log(err);
    })
})();






























