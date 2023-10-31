/* const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const mergePdfs = async (p1, p2) => {
  await merger.add(p1);
  await merger.add(p2);
  let d = new Date().getTime()
console.log(d)
  await merger.save(`public/${d}.pdf`);

  return d
 
}
   
module.exports = { mergePdfs } */


/* 
////this is workin code to merge two pdf in single

const express = require("express");
const app = express();
const path = require("path");
const fs = require('fs');
const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

// Create the 'public' directory if it doesn't exist
const publicDirectory = path.join(__dirname, 'public');
if (!fs.existsSync(publicDirectory)) {
  fs.mkdirSync(publicDirectory);
}

const mergePdfs = async (p1, p2) => {
  await merger.add(p1);
  await merger.add(p2);
  let d = new Date().getTime();
  console.log(d);
  await merger.save(`public/${d}.pdf`);
  return d;
}
 
module.exports = { mergePdfs };




 */

//// this code is perfectly working to merge multiple pdf in single pdf file

const PDFMerger = require('pdf-merger-js');
const path = require("path");
const fs = require('fs');

// Create the 'public' directory if it doesn't exist
const publicDirectory = path.join(__dirname, 'public');
if (!fs.existsSync(publicDirectory)) {
  fs.mkdirSync(publicDirectory);
}

const mergePdfs = async (pdfPaths) => {
  const merger = new PDFMerger();

  for (const pdfPath of pdfPaths) {
    await merger.add(pdfPath);
  }

  let d = new Date().getTime();
  console.log(d);

  await merger.save(`public/${d}.pdf`);
  return d;
}

module.exports = { mergePdfs };
