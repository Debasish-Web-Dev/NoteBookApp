import express from 'express';
import dotenv from 'dotenv'; 
// const multer = require("multer");
import mongoose from 'mongoose';
import cors from "cors";
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

dotenv.config();

const URI = process.env.MongoDBURI;

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import submitRoute from "./route/submit.route.js";





try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}


app.use("/book", bookRoute);
app.use("/user", userRoute);
app.use("/submit", submitRoute);

app.listen(port, ()=>{
    console.log(`the port is running in the ${port} port`);
})