// Creating chatting website (Similar to W'app)

/* 
    npm init -y
    npm i express
    npm i ejs
    npm i mongoose
*/


const express = require("express");
const app = express();

app.set("view engine" , "ejs");

const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/miniWhatsApp');
}



const methodOverride = require("method-override");
app.use(methodOverride("_method"));




app.use(express.static("public"));

app.use(express.urlencoded({ extended: true })); 




const Chat = require("./models/chat.js")






app.listen(8080 , () => {
    console.log("server is listening");
});






app.get("/chats" , async (req , res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs" , {chats});
});



app.get("/chats/new" , (req , res) => {
    res.render("new.ejs");
})


app.post("/chats" , async (req , res) => {
    let {from , msg , to} = req.body;

    let newChat = new Chat ({
        from : from,
        msg : msg,
        to : to,
        created_at : new Date()
    });

    await newChat.save();

    // console.log(newChat);
    res.redirect("/chats");
});


app.get("/chats/:id/edit" , async (req , res) => {
    let {id} = req.params;

    let chat = await Chat.findById(id);

    res.render("edit.ejs" , {chat});
});




app.put("/chats/:id" , async (req , res) => {
    let {id} = req.params;

    let {msg : newMsg} = req.body;

    let updatedChat = await Chat.findByIdAndUpdate(id , {msg : newMsg} , {runValidators : true});

    // console.log(updatedChat);
    res.redirect("/chats");
});



app.delete("/chats/:id" , async (req , res) => {
    let {id} = req.params;

    let deletedChat = await Chat.findByIdAndDelete(id);

    // console.log(deletedChat);

    res.redirect("/chats");
})
