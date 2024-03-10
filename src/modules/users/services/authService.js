import fsPromises from 'fs/promises';
import authSchema from '../../../models/auth.model.js'
import mediaSchema from '../../../models/media.schema.js';
export const signUpservice = async (req, res) => {
    try {
        const { name, password, email, dob, gender, role } = req.body;
        const photo = req.file;

        if (!name || !email || !dob || !gender || !photo || !password) {
            return res.status(400).json({ success: false, message: "Please fill all the fields" });
        }

        const filePath = "uploads/" + req.file.filename;

        if (!photo.mimetype.includes("image")) {
            await fsPromises.unlink(filePath);
            return res.status(400).json({ success: false, message: "Please upload an image" });
        }

        const media = await mediaSchema.create({ path: photo.filename, type: photo.mimetype });
        await authSchema.create({ name, email, password, dob: new Date(dob), photo: media._id, gender, role });
        res.status(200).json({ success: true, message: "User created successfully" });
    } catch (error) {
        if (req.file) {
            const filePath = "uploads/" + req.file.filename;
            await fsPromises.unlink(filePath);
        }
        res.status(500).json({ success: false, message: error.message });
    }
};
