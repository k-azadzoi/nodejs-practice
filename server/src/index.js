// BOOTING UP EXPRESS
const express = require('express');
const app = express();

// FOR CONNECTING TO MONGODB
const mongoose = require('mongoose');

const helmet = require('helmet');
const bodyParser = require('body-parser');

// FOR ENVIRONMENT VARIABLES
require('dotenv').config();

//ROUTES
const postsRoute = require('./routes/posts');

// MAKING A CONNECTION TO DB
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, 
            { 
                useNewUrlParser: true, 
                useUnifiedTopology: true,
            },
            () => {
                console.log('Connected to the DB')
            }
        )      
    } catch (error) {
        console.error(error);
    }
};

connectDB();

app.use(helmet());
app.use(bodyParser.json());


// USING POSTS ROUTE
app.use('/posts', postsRoute);


//SENDING TO / ROUTE
app.get('/', (req, res) => {
    res.send('Our first route');
})

// CONFIRMING LOCALHOST PORT
const port = process.env.PORT || 1337;
app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
})