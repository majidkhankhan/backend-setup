import mongoose from 'mongoose';

const dbConnection = async ()=>{
    const URL = process.env.DATABASE_URL||'mongodb://localhost:27017/project-name'
    try {
        await mongoose.connect(URL)
        console.log('database Connect Succfully')
    } catch (error) {
        console.log(error)
    }
}
export default dbConnection;