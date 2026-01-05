import bodyParser from "body-parser";
import path from "path";
import cookieParser from "cookie-parser";
import express from "express";
import session from "express-session";
import mongoose from "mongoose";
import dotenv from "dotenv";
import engine from "ejs-mate";
import { fileURLToPath } from "url";

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

const connection ='mongodb://localhost:27017/bimbelSharp';
mongoose.connect(connection).then((result) => app.listen(port))
.then(console.log(`server start on port ${port}`))
.catch((err) => console.log(err));