const express = require("express")

const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const { imageToPdf } = require("../controllers/imageToPdfCtrl")

const router = express.Router()

router.route('/convertToPDF')
  .post(upload.array('images', 10), imageToPdf);



  
module.exports = router