/* 
credentials = require('./middi/credentials.js');
const corsOptions = require('./config/corsOptions.js');
const express =require("express")
// const fileUpload = require('express-fileupload');
// const cloudinary = require("cloudinary").v2;
const cors = require("cors")
const app = express()

// app.use(fileUpload({
//     useTempFiles:true
// }))
const path = require("path")
const fs = require('fs');

app.use(express.json())


app.use(cors());

// app.use(cors(corsOptions));

// cloudinary.config({
//     cloud_name: "decjoyrmj",
//     api_key: "627647724186355",
//     api_secret: "mw_DjfFMzfZ2pKOWv1hNyuP8T0A"
//   });

//  for route

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname,"templates/index.html"))
})

const user = require("./Routes/route")

app.use("/", user)


const merge = require("./Routes/mergeRoute.js")

app.use("/", merge)



module.exports = app */






/////////////////////////////////////

// app.js

const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

// Serve static files
app.use('/static', express.static('public'));

// Set up your routes
const userRoutes = require("./Routes/route");
const mergeRoutes = require("./Routes/mergeRoute");

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"));
});

app.use("/", userRoutes);
app.use("/", mergeRoutes);

module.exports = app;

 
 
