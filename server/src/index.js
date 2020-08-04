const express = require('express');

const app = express();

const port = process.env.PORT || 1337;

app.get('/', (req, res) => {
    res.send('Our first route');
})

app.get('/posts', (req, res) => {
    res.send('Welcome to the posts route');
})

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
})