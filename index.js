
/* 

const express = require('express');
const imgToPDF = require('image-to-pdf');
const { PDFDocument } = require('pdf-lib');
// const PDFMerger = require('pdf-merger-js');
const PDFMerge = require('pdf-merge');

// const PDFDocument = require('pdfkit');
const fs = require('fs');
const multer = require('multer');
const cors = require('cors');

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//  Set up multer for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
 

// image to pdf working 

app.post('/convertToPDF', upload.array('images', 10), (req, res) => {
  try {
    const files = req.files;

    if (!files || files.length === 0) {
      return res.status(400).json({ error: 'No image files provided for conversion.' });
    }

  
    const imageBuffers = files.map((file) => file.buffer);

   
    const paperSize = req.body.paperSize || imgToPDF.sizes.A4;


    const pdfStream = imgToPDF(imageBuffers, paperSize);

  
    res.setHeader('Content-Disposition', 'attachment; filename=output.pdf');
    res.setHeader('Content-Type', 'application/pdf');

  
    pdfStream.pipe(res);
  } catch (error) {
    console.error('PDF conversion error:', error);
    res.status(500).json({ error: 'An error occurred during conversion.' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




 */