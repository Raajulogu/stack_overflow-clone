import mongoose from "mongoose";

export function dbConnection(){
    const params = {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    }

    try {
        mongoose.connect("mongodb+srv://rajesh:rajesh145@cluster0.563jw0h.mongodb.net/?retryWrites=true&w=majority/Stack_Overflow", params)
        console.log("Database connected Sucessfully")
    } catch (error) {
       console.log("Error connecting DB----", error) 
    }
}