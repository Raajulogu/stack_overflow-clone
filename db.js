import mongoose from "mongoose";

export function dbConnection(){
    const params = {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    }

    try {
        mongoose.connect("mongodb+srv://rajesh:rajesh145@cluster0.563jw0h.mongodb.net/Stack_Overflow?retryWrites=true&w=majority", params)
        console.log("Database connected Sucessfully")
    } catch (error) {
       console.log("Error connecting DB----", error) 
    }
}