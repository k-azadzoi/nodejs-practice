const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('Posts route')
})

router.post('/', (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        description: req.body.description,
    })

    newPost.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({ message: err });
        })
});

module.exports = router;