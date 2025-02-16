import express, { json } from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import { clerkMiddleware } from '@clerk/express'


const PORT=process.env.PORT;


import userRoute from './src/routes/user.route.js';
import adminRoute from './src/routes/admin.route.js';
import authRoute from './src/routes/auth.route.js';
import songRoute from './src/routes/songs.route.js';
import albumnsRoute from './src/routes/album.route.js';
import statsRoute from './src/routes/stats.route.js';
import uiRoute from './src/routes/ui.route.js'
import { default as connectDB } from './src/config/db.js';
import fileUpload from 'express-fileupload';
import cors from 'cors'

import { errorHandler } from './src/middleware/errorhandler.middleware.js';
import path from 'path';

const __dirname= path.resolve()


//Middlewares
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware()); //this will add the req.auth to the req obj
app.use(fileUpload({
    tempFileDir: path.join(__dirname)+"tmp",
    createParentPath:true,
    limits:{
        fileSize:10*1024*1024
    }
}))

//Test Routes

//Routes
app.use('/api/users',userRoute);
app.use('/api/auth',authRoute);
app.use('/api/admin',adminRoute);
app.use('/api/songs',songRoute);
app.use('/api/albums',albumnsRoute);
app.use('/api/stats',statsRoute);
app.use('/api/ui',uiRoute)


//Error Handler Middleware
app.use(errorHandler);
//Server Listening
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server Running on PORT:${PORT}`)
})