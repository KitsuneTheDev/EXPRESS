import express from 'express';
import posts from './routes/posts.js';
import path from 'path';

const app = express();
const PORT = process.env.PORT;

// setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/posts', posts);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));