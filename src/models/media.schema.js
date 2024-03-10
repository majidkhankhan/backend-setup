import mongoose from "mongoose";
const Schema = mongoose.Schema;

const mediaSchema = new Schema(
    {
        type: {
            type: String,
            require: true,
        },
        path: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("media", mediaSchema)