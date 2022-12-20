import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'

import { registerValidation } from './validations/auth.js';

mongoose
    .connect('mongodb+srv://admin:RRRRRR@cluster0.6fxr3ja.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB error', err));

const app = express();

app.use(express.json());



app.post('/auth/register', registerValidation, (req, res) => {
 
})


app.listen(4444, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log('Server OK')
})
