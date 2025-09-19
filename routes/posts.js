import express from 'express';
const router = express.Router();

let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'},
    {id: 4, title: 'Post Four'},
];

// GET all posts
router.get('/', (req, res) => {
    const limit = Number.parseInt(req.query.limit);

    if(!isNaN(limit) && limit <= 0) {
        return res.status(200).json(posts.slice(0, limit));
    }
    res.status(200).json(posts);
});

// GET post by id
router.get('/:id', (req, res) => {
    const idfromQuery = Number.parseInt(req.params.id);
    const postById = posts.find(post => post.id === idfromQuery);

    if(!postById) {
        return res.status(404).json({message: `A post with the id of ${id} was not found`});
    }

    res.status(200).json(postById);
});

// POST new post
router.post('/', (req, res) => {
    console.log(req.body);
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    };

    if(!newPost.title) {
        return res.status(400).json({message: 'Bad Request. Please provide a body that includes title as a value of string'});
    }

    posts.push(newPost);
    res.status(201).json(posts);
});

// UPDATE post
router.put('/:id', (req, res) => {
    const idFromQuery = Number.parseInt(req.params.id);
    const postById = posts.find(post => post.id === idFromQuery);
    if(!postById) {
        return res.status(400).json({message: `The post with the id of ${idFromQuery} was not found.`});
    }
    postById.title = req.body.title;
    res.status(200).json(posts);
});

// DELETE post
router.delete('/:id', (req, res) => {
    const idFromQuery = Number.parseInt(req.params.id);

    if(!posts.some(post => post.id === idFromQuery)) {
        return res.status(400).json({message: `The post with the id of ${idFromQuery} was not found`});
    }
    const newPosts = posts.filter(post => post.id !== idFromQuery);
    posts = newPosts;
    res.status(200).json(posts);
})

export default router;

