/* const express = require("express")
const router = express.Router()

const multer = require('multer');

const { mergePdfs } = require("../controllers/mergePdf");

const upload = multer({dest:'uploads/'})



router.route('/merge').post( upload.array('pdfs', 2), mergePdfs);



  
module.exports = router */





const express = require("express");
const router = express.Router();
const { mergePdfs } = require("../mergePdf.js");
const multer = require('multer');
// Set up multer for file uploads

router.route('/merge').post(multer({ dest: 'uploads/' }).array('pdfs', 2), mergePdfs);



module.exports = router;
