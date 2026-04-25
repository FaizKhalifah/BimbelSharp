import bodyParser from "body-parser";
import path from "path";
import cookieParser from "cookie-parser";
import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import dotenv from "dotenv";
import engine from "ejs-mate";
import errorHandler from "../Bimbelsharp/src/middlewares/errorHandler.js";
import { fileURLToPath } from "url";



dotenv.config();

import apiRouter from "./src/routes/api/apiIndexRoutes.js";
import viewRouter from "./src/routes/web/webIndexRoutes.js";

const port = process.env.PORT || 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// set up view
app.set('view engine', 'ejs');
app.engine("ejs", engine);
app.use(express.static(path.join(__dirname, 'public')));


//routes
app.use(apiRouter);
app.use(viewRouter);


//global error handler (must be after all routes)
app.use(errorHandler);

// app.get("/",(req,res)=>{
//     res.send("ini aplikasi bimblesharp")
// })

const connection ='mongodb://localhost:27017/bimbelSharp';
mongoose.connect(connection).then((result) => app.listen(port))
.then(console.log(`server start on port ${port}`))
.catch((err) => console.log(err));