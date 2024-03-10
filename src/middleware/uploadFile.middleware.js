import multer from 'multer';
import { v4 as uuid4 } from 'uuid';
import path from 'path';
import fs from 'fs';

const uploadPath = './uploads';

if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
}

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, uploadPath);
    },
    filename: (req, file, callback) => {
        const filename = `${uuid4()}${path.extname(file.originalname)}`;
        callback(null, filename);
    }
});

const upload = multer({ storage });

export default upload;
