import express from 'express'
import mongoose from 'mongoose'
import actionRouter from './ActionRouter.js'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 5001
const MONGODB = process.env.MONGODB_URI

const app = express()
app.use(express.json())
app.use('/api', actionRouter)

async function startHistoryUserApp() {
    try {
        await mongoose.connect(MONGODB)
        app.listen(PORT, () => console.log('server started on ' + PORT + ' port' ))
    } catch (e) {
        console.log(e)
    }
}

startHistoryUserApp()