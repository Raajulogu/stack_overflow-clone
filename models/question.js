
import mongoose, { mongo } from "mongoose";
const {ObjectId} = mongoose.Schema
const questionSchema = new mongoose.Schema(
    {   name:{
        type:String,
        required:true
        },
        questionTitle : {
            type:String,
            required : true
        },
        questionBody : {
            type: String,
            required : true
        },
        questionTags : {
            type:[String],
            required : true
        },
        answers:{
            type:[String],
            default:[]
        },
        votes : {
            type:Number,
            default: "0"
        },
        date : {
            type :String,
            default :Date.now()
        }

    }
)

const Questions = mongoose.model("question", questionSchema)
export {Questions}