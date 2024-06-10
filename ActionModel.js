import mongoose from "mongoose";

const actionModel = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, required:true},
    action: {type: String,required:true},
    timestamp: {type:Date,required:true}
})

export default mongoose.model('Action', actionModel )