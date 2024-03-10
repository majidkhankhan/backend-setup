import mongoose from 'mongoose'
import validator from 'validator'
import { hashPassword } from '../middleware/bcryptPassword.middleware.js'
const Schema = mongoose.Schema

const authSchema = new Schema(
    {

        photo: {
            type: Schema.Types.ObjectId,
            ref: "media"
        },

        name: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
            require: true,
            validate: validator.default.isEmail
        },
        role: {
            type: String,
            enum: ["ADMIN", "USER"],
            default: "USER"
        },

        gender: {
            type: String,
            enum: ["male", "female"],
        },
        dob: {
            type: Date,
        },
        password: {
            type: String,
        },
    }, {
    timestamps: true
}
)
authSchema.pre('save', async function () {
    this.password = await hashPassword(this.password)
})
export default  mongoose.model('User', authSchema)