import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import user from './routes/userRoutes.js';

import handleError from './middleware/error.js';

import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config()

const app = express();
app.use(express.json());

const corsOptions = {
    origin: 'https://cps-academy.vercel.app',
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors());
app.use(cookieParser());
app.use(handleError);


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));





app.use('/api', user);




const PORT = process.env.PORT || 5000;



mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

