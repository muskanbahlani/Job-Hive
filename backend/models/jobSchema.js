import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "Please provide job title"],
        minLength: [3, "Job title must contain at least 3 characters!"],
        maxLength: [50, "Job title cannot exceed 50 characters!"],
    },
    description:{
        type: String,
        required: [true, "Please provide job description"],
        minLength: [30, "Job description must contain at least 3 characters!"],
        maxLength: [500, "Job description cannot exceed 350 characters!"],
    },
    category:{
        type: String,
        required: [true, "Please provide job category"],
    },
    country:{
        type: String,
        required: [true, "Please provide job country"],  
    },
    city:{
        type: String,
        required: [true, "Please provide job city"],  
    },
    location:{
        type: String,
        required: [true, "Please provide job location"],
        minLength: [50, "Job location must contain 50 characters"],
    },
    fixedSalary: {
        type: Number,
        minLength: [4, "Fixed salary must contain atleast 4 digits!"],
        maxLength: [9, "Fixed salary cannot exceed 9 digits!"],

    },
    SalaryFrom: {
        type: Number,
        minLength: [4, "salary must contain atleast 4 digits!"],
        maxLength: [9, "salary cannot exceed 9 digits!"],  
    },
    SalaryTo: {
        type: Number,
        minLength: [4, "salarayTo must contain atleast 4 digits!"],
        maxLength: [9, "salaryTo cannot exceed 9 digits!"],
    },
    expired:{
        type: Boolean,
        default: false,
    },
    jobPostedOn: {
        type: Date,
        default: Date.now,
    },
    postedBy: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
});

export const Job = mongoose.model("Job", jobSchema )