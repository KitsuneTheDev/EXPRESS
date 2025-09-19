const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT;

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'},
    {id: 4, title: 'Post Four'},
]

// GET all posts
app.get('/api/posts', (req, res) => {
    const limit = Number.parseInt(req.query.limit);
    if (!isNaN(limit) && limit >= 0) {
        res.json(posts.slice(0, limit));
    } else {
        res.json(posts);
    }
});

// GET single post
app.get('/api/posts/:id', (req, res) => {
    const id = Number.parseInt(req.params.id);
    const postById = posts.find(post => post.id === id);

    res.json(postById);
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));