var fs = require("fs");
var zlib = require('zlib');
fs.createReadStream('./Que-6/text1.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('./Que-6/text1.txt','utf-8'));
console.log("File Decompressed.");