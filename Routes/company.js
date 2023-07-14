import express from "express";
import { Company } from "../models/company.js";

let router = express.Router();

router.get("/all", async (req, res) => {
    try {
        const companies = await Company.find()
        if (!companies) {
            return res.status(400).json({ message: "Data Unavailable" })
        }
        res.status(200).json({
            message: "Sucessfully got your data",
            data: companies
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server Error" })
    }
})

router.post("/post", async (req, res) => {
    
    try {
        const postedDate = new Date().toJSON().slice(0, 10);
        const companies = await new Company(
            {
                ...req.body,
                date: postedDate
            }
        ).save()
        if (!companies) {
            return res.status(400).json({ message: "Error in posting the question" })
        }
        res.status(200).json({ message: "Question Posted Successfully", data: companies })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal server error" })
    }
})

export const companyRouter = router

