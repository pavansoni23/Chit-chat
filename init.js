//  to create multiple sample chats


const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/miniWhatsApp');
}

const Chat = require("./models/chat.js")



const allChats = [
    {
      from: "Alice",
      to: "Bob",
      msg: "Hey Bob, how are you doing?",
      created_at: new Date()
    },
    {
      from: "Bob",
      to: "Alice",
      msg: "Hi Alice! I'm good, thanks. How about you?",
      created_at: new Date()
    },
    {
      from: "Charlie",
      to: "Alice",
      msg: "Are we still on for the meeting tomorrow?",
      created_at: new Date()
    },
    {
      from: "Alice",
      to: "Charlie",
      msg: "Yes, the meeting is at 10 AM. See you then!",
      created_at: new Date()
    },
    {
      from: "David",
      to: "Charlie",
      msg: "Can you send me the report by today evening?",
      created_at: new Date()
    },
    {
      from: "Charlie",
      to: "David",
      msg: "Sure, I'll send it over as soon as possible.",
      created_at: new Date()
    },
    {
      from: "Eve",
      to: "David",
      msg: "Hey David, can we reschedule our call to next week?",
      created_at: new Date()
    },
    {
      from: "David",
      to: "Eve",
      msg: "Next week works for me. How about Wednesday?",
      created_at: new Date()
    },
    {
      from: "Bob",
      to: "Eve",
      msg: "Eve, do you have the minutes from last week's meeting?",
      created_at: new Date()
    },
    {
      from: "Eve",
      to: "Bob",
      msg: "I'll send them to you shortly, Bob.",
      created_at: new Date()
    },
    {
      from: "Alice",
      to: "Eve",
      msg: "Eve, do you have a moment to discuss the project status?",
      created_at: new Date()
    },
    {
      from: "Eve",
      to: "Alice",
      msg: "Sure, Alice. Let's talk now.",
      created_at: new Date()
    },
    {
      from: "Charlie",
      to: "Bob",
      msg: "Bob, can you review the document I sent earlier?",
      created_at: new Date()
    },
    {
      from: "Bob",
      to: "Charlie",
      msg: "I'm on it, Charlie. I'll get back to you soon.",
      created_at: new Date()
    },
    {
      from: "David",
      to: "Alice",
      msg: "Alice, can you join the team call at 3 PM?",
      created_at: new Date()
    },
    {
      from: "Alice",
      to: "David",
      msg: "Yes, I'll be there.",
      created_at: new Date()
    },
    {
      from: "Eve",
      to: "Charlie",
      msg: "Charlie, did you get the latest updates on the project?",
      created_at: new Date()
    },
    {
      from: "Charlie",
      to: "Eve",
      msg: "Yes, I did. Thanks for sharing.",
      created_at: new Date()
    },
    {
      from: "Bob",
      to: "Alice",
      msg: "Alice, can you send me the contact details of the new vendor?",
      created_at: new Date()
    },
    {
      from: "Alice",
      to: "Bob",
      msg: "I'll send them over right away, Bob.",
      created_at: new Date()
    }
  ];
  

const initDB = async () => {
    await Chat.deleteMany({});

    await Chat.insertMany(allChats);
    
    console.log("DB initialized");
};

initDB();