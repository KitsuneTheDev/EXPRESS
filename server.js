import express from 'express';
import posts from './routes/posts.js';
import path from 'path';
import url from 'url';
import logger from './middleware/logger.js';
import errorHandler from './middleware/errorHandler.js';
import notFound from './middleware/notFound.js';

// Get the directory name
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT;

// logger middleware
app.use(logger);

// setup static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/posts', posts);

// errorHandler middleware
app.use(notFound); 
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));