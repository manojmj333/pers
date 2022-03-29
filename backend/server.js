const express = require("express")
const mongoose = require("mongoose")
const app = express();
const cors = require('cors')

require('dotenv').config()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.SECRET;
mongoose.connect(uri,{useNewUrlParser: true});
const connection = mongoose.connection;

connection.once("open",()=> {
  console.log("MongoDB connection established successfully");
})

const contactRouter = require("./routes/contacts");

app.use("/contacts",contactRouter);

app.listen(port,()=>{
  console.log(`Server running on ${port}`);
})
