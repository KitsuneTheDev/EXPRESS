let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'},
    {id: 4, title: 'Post Four'},
];

// @desc Get all posts
// @route GET /api/posts
export const getPosts = (req, res, next) => {
    const limit = Number.parseInt(req.query.limit);

    if(!isNaN(limit) && limit >= 0) {
        return res.status(200).json(postMessage.slice(0, limit));
    }

    res.status(200).json(posts);
};

// @desc Get single post by id
// @route GET /api/posts/:id
export const getSinglePost = (req, res, next) => {
    const idFromQuery = Number.parseInt(req.params.id);
    const postById = posts.find(post => post.id === idFromQuery);

    if(!idFromQuery) {
        const error = new Error(`Bad request. To get single post, a valid id must be provided.`);
        error.status = 400;
        return next(error);
    }

    if(!postById) {
        const error = new Error(`A post with the id of ${idFromQuery} was not found.`);
        error.status = 404;
        return next(error);
    }

    res.status(201).json(posts.find(post => post.id === idFromQuery));
}

// @desc Update post
// @route PUT /api/post/:id
export const updatePost = (req, res, next) => {
    const idFromQuery = Number.parseInt(req.params.id);
    const postById = posts.find(post => post.id === idFromQuery);

    console.log(postById);

    if(!idFromQuery || !req.body || req.body?.title.length === 0) {
        const error = new Error(`Bad request. To update a post, a valid id and a valid body must be provided.`);
        error.status = 400;
        return next(error);
    }

    if(!postById) {
        const error = new Error(`A post with the id of ${idFromQuery} was not found.`);
        error.status = 404;
        return next(error);
    }

    postById.title = req.body.title;
    res.status(200).json(posts);
}

// @desc Delete post
// @route DELETE /api/post/:id
export const deletePost = (req, res, next) => {
    const idFromQuery = Number.parseInt(req.params.id);
    const postById = posts.find(post => post.id === idFromQuery);

    if(!idFromQuery) {
        const error = new Error(`Bad request. To delete a post, a valid id must be provided.`);
        error.status(400);
        return next(error);
    }

    if(!postById) {
        const error = new Error(`A post with the id of ${idFromQuery} was not found.`);
        error.status = 404;
        return next(error);
    }

    posts = posts.filter(post => post.id !== idFromQuery);
    const theCode = posts.length === 0 ? 204 : 200;
    res.status(theCode).json(posts);
}

// @desc Create post
// @route POST /api/post/:id
export const createPost = (req, res, next) => {

    if(!req.body || req.body?.title.length === 0) {
        const error = new Error(`Bad request. To create a post, a valid body must be provided.`);
        error.status = 400;
        return next(error);
    }

    const newPost = {
        id: posts.length + 1,
        title: req.body?.title,
    }

    posts.push(newPost);
    res.status(200).json(posts);
}