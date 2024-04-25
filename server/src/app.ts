import express from 'express';
import cors from 'cors';
import * as userController from './controllers/userController';
import * as postController from './controllers/postController';
import * as commentController from './controllers/commentController';

const app = express();
app.use(cors());
app.use(express.json());

// User routes
app.post('/users/register', userController.createUser);
app.post('/users/login', userController.loginUser);

// Post routes
app.post('/posts', postController.createPost);
app.get('/posts', postController.getNewsFeed);

// Comment routes
app.post('/comments', commentController.createComment);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});