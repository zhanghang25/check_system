import * as multer from 'multer';
import * as fs from 'fs';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    try {
      fs.mkdirSync('uploads');
    } catch (e) {}

    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    const tmpName = decodeURIComponent(req.body.newName);
    const uniqueSuffix =
      Date.now() + '-' + Math.round(Math.random() * 1e9) + '-' + tmpName;
    // decodeURIComponent(file.originalname);
    cb(null, uniqueSuffix);
  },
});

export { storage };
