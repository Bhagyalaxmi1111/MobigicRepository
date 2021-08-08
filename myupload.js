const express = require('express');
const multer = require('multer');
const uuid = require('uuid').v4;
var path = require('path');
var router = express.Router();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(req.file);
    //cb(null, '/images')
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    //cb(null, file.fieldname + '-' + Date.now())
    const { originalname } = file;
    cb(null, originalname);
  }
});

var upload = multer({ storage: storage });

const app = express();

app.use(express.static('public'));
//app.use(express.static(path.join(__dirname, 'uploads')));
//app.use(express.static('uploads'));

router.post('/upload', upload.single('filename'), (req, res) => {
  console.log(req.file);
  return res.json({ status: 'ok' });
});


app.listen(3000, () => console.log('App is listening'));

module.exports = router;