import express from 'express';
import dbConnection from './src/utils/db.connection.js'
import userRoutes from './src/modules/users/routes/all.routes.js'
import bodyParser from 'body-parser'
import adminRoutes from './src/modules/admin/routes/all.routes.js'

const app = express()
const port = process.env.port||8000;
dbConnection()
app.use(bodyParser.json())

// Prefix
app.use("/api/v1/user",userRoutes)
app.use("/api/v1/admin",adminRoutes)

app.listen(port,()=>{console.log(`Server is Running Port ${port}`)})