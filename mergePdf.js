
const express = require("express")
const app = express()


const multer = require('multer');

const {mergePdfs} = require("./merge")

const path = require("path")

const fs = require('fs');

// const upload = multer({dest:'uploads/'})

app.use('/static', express.static('public'))

exports.mergePdfs = async (req, res, next)=>{
    // console.log(req.files)

 let d = await mergePdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path));
  console.log(d)
  res.redirect(`https://pdftool-dm9q.onrender.com/static/${d}.pdf`)
  
    // res.send({data:req.files})

  } 
