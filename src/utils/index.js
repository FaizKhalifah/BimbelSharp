import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/index.js";

const {APP_SECRET} = config;

async function generateSalt() {
    return await bcrypt.genSalt();
}

async function generatePassword(password,salt) {
    return await bcrypt.hash(password,salt);
}

async function validatePassword(inputPassword, savedPassword, salt) {
    const generatedPassword = await generatePassword(inputPassword,salt);
    return generatedPassword === savedPassword;
}

async function validateSignature(params) {
    try {
        const signature = req.get("Authorization");
        console.log(signature);
        const payload = await jwt.verify(signature.split(" ")[1], APP_SECRET);
        req.user = payload;
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

function formateData(data){
    if(data){
        return {data};
    }
    else{
        throw new Error("Data not found!");
    }
}

export default{
    generatePassword,
    generateSalt,
    validatePassword,
    validateSignature,
    formateData
}