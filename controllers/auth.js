import jwt from "jsonwebtoken"
import { User } from "../models/users.js";

const isAuthenticated = async(req, res, next)=>{
let token;

    if(req.headers){
        try {
            token = await req.headers["x-auth"];
            const decode = jwt.verify(token, process.env.SECRET_KEY)
            req.user = await User.findById(decode.id).select("_id name email")
            next()
        } catch (error) {
            console.log(error)
            return res.status(400).json({message:"Invalid Authorization"})
        }
    }
    if(!token){
        return res.status(400).json({message:"Access Denied"})
    }
}

export {isAuthenticated}