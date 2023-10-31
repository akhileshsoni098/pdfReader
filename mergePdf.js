

/* 
const express = require("express")
const app = express()


const multer = require('multer');

const {mergePdfs} = require("./merge")

const path = require("path")

const fs = require('fs');

// const upload = multer({dest:'uploads/'})

app.use('/static', express.static('public'))

exports.mergePdfs = async (req, res, next)=>{
   try{
  // console.log(req.files)
    if (!Array.isArray(req.files) || req.files.length < 2) {
      return res.status(400).send("Please upload at least two PDF files.");
  }
 let d = await mergePdfs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path));
  console.log(d)
  
  res.redirect(`http://localhost:4000/static/${d}.pdf`)

}catch(err){
  res.status(500).json({status:false , message:err.message})
}
  } 
 */

/* 
  ////////////////////////////////////////////////

  // working but feature which is not here that is multiple file merge

  const express = require("express");
  const app = express();
  const multer = require('multer');
  const { mergePdfs } = require("./merge");
  const path = require("path");
  const fs = require('fs');
  const PDFMerger = require('pdf-merger-js');
  
  // Create a function to create a new PDFMerger instance
  function createNewMerger() {
    return new PDFMerger();
  }
  
  // Create a new merger instance for each request
  const merger = createNewMerger();
  
  // Create the 'public' directory if it doesn't exist
  const publicDirectory = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDirectory)) {
    fs.mkdirSync(publicDirectory);
  }
  
  exports.mergePdfs = async (req, res, next) => {
    try {
      // Ensure that req.files is an array
      if (!Array.isArray(req.files) || req.files.length < 2) {
        return res.status(400).send("Please upload at least two PDF files.");
      }
      
      // Create a new merger instance for each merge operation
      const newMerger = createNewMerger();
  
      await newMerger.add(path.join(__dirname, req.files[0].path));
      await newMerger.add(path.join(__dirname, req.files[1].path));
  
      let d = new Date().getTime();
      console.log(d);
  
      // Save the merged PDF using the new merger instance
      await newMerger.save(`public/${d}.pdf`);
  
      // Send the merged PDF as a response
      res.download(`public/${d}.pdf`, `merged_${d}.pdf`, (err) => {
        if (err) {
          console.error("Error sending merged PDF:", err);
          res.status(500).json({ status: false, message: err.message });
        }
      });
    } catch (error) {
      console.error("Error merging PDFs:", error);
      res.status(500).json({ status: false, message: error.message });
    }
  }; 
   */


///// this code is working to merge multiple pdf at a time 

const express = require("express");
const app = express();
const multer = require('multer');
const { mergePdfs } = require("./merge");
const path = require("path");
const fs = require('fs');
const PDFMerger = require('pdf-merger-js');
// Create a function to create a new PDFMerger instance
function createNewMerger() {
  return new PDFMerger();
}

// Create a new merger instance for each request
const merger = createNewMerger();

// Create the 'public' directory if it doesn't exist
const publicDirectory = path.join(__dirname, 'public');
if (!fs.existsSync(publicDirectory)) {
  fs.mkdirSync(publicDirectory);
}

exports.mergePdfs = async (req, res, next) => {
  try {
    // Ensure that req.files is an array
    if (!Array.isArray(req.files) || req.files.length < 2) {
      return res.status(400).send("Please upload at least two PDF files.");
    }

    const pdfPaths = req.files.map(file => path.join(__dirname, file.path));
    
    // Create a new merger instance for each merge operation
    const newMerger = createNewMerger();

    for (const pdfPath of pdfPaths) {
      await newMerger.add(pdfPath);
    }

    let d = new Date().getTime();
    console.log(d);

    // Save the merged PDF using the new merger instance
    await newMerger.save(`public/${d}.pdf`);

    // Send the merged PDF as a response
    res.download(`public/${d}.pdf`, `merged_${d}.pdf`, (err) => {
      if (err) {
        console.error("Error sending merged PDF:", err);
        res.status(500).json({ status: false, message: err.message });
      }
    });
  } catch (error) {
    console.error("Error merging PDFs:", error);
    res.status(500).json({ status: false, message: error.message });
  }
};
