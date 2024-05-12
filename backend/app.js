import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";

import userRouter from "./routes/userRouter.js";
import applicationRouter from "./routes/applicationRouter.js";
import jobRouter from "./routes/jobRouter.js";
import {dbConnection} from "./database/dbConnection.js";
import {errorMiddleware} from "./middlewares/error.js";


const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
    cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);


app.use(cookieParser());//important for authorization//isko json se phele likhna hai 
app.use(express.json());//only parsrs json data baaki ko neglect 
app.use(express.urlencoded({extended: true}));//string provide krte hai toh string ko json format mai convert kr dete hai

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api/v1/user", userRouter);
app.use("/api/v1/application", applicationRouter);
app.use("/api/v1/job", jobRouter);

dbConnection();

//error middleware last mai use krna hai yaad rakhna 
app.use(errorMiddleware);

export default app;