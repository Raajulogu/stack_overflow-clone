
import mongoose, { mongo } from "mongoose";
const companySchema = new mongoose.Schema(
    {   companyname:{
        type:String,
        required:true
        },
        jobTitle : {
            type:String,
            required : true
        },
        Location: {
            type: String,
            required : true
        },
        Skill : {
            type:[String],
            required : true
        },
        salary : {
            type:String,
            default: "NA"
        },
        date : {
            type :String,
            default :Date.now()
        }

    }
)

const Company = mongoose.model("company", companySchema)
export {Company};