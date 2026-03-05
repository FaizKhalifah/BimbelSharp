import mongoose from "mongoose";

const MaterialSchema = new mongoose.Schema({
    title:String,
    description:String,
    fileUrl:String,
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    },
   createdAt: {
        type: Date,
        default: Date.now
    }
})

const Material = mongoose.model("Material",MaterialSchema);
export default Material;