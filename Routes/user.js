import express from "express"
import { User, generateJwtToken } from "../models/users.js";
import bcrypt from "bcrypt"


const router = express.Router();

router.post("/signup", async(req, res)=>{
    try {
        let user = await User.findOne({email:req.body.email});
        if(user) return res.status(400).json({message:"Email already exist"})
        
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    user = await new User({
        name : req.body.name,
        email : req.body.email,
        contact : req.body.contact,
        password: hashedPassword
    }).save();
    const token = generateJwtToken(user._id);
    res.status(201).json({message:"Logged in Sucessfully", token})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})
    }
})


router.post("/login", async(req, res)=>{
    try {
        const user = await User.findOne({email:req.body.email})
        if(!user){
            return res.status(400).json({message:"Invalid Credentials"})
        }
        const validatePassword = await bcrypt.compare(
            req.body.password,
            user.password
        )
        if(!validatePassword){
            return res.status(400).json({message:"Invalid Credentials"})
        }
     const token = generateJwtToken(user._id);
     res.status(200).json({message:"Logged in succesfully", token})

    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})
    }
})

export const userRouter = router;