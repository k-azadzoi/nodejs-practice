const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const postsRoute = require('./routes/posts');

mongoose.connect(process.env.MONGO_URI, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    },
    () => {
        console.log('Connected to the DB')
    }
);

app.use('/posts', postsRoute);

app.get('/', (req, res) => {
    res.send('Our first route');
})


const port = process.env.PORT || 1337;
app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
})