import { Request, Response } from 'express';
import * as postService from './services/postService';

export function createPost(req: Request, res: Response) {
  const { userId, userName, body, imageUrl, sharedPostId } = req.body;

  try {
    const newPost = postService.createPost(userId, userName, body, imageUrl, sharedPostId);
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
}

export function getNewsFeed(req: Request, res: Response) {
  try {
    const posts = postService.getNewsFeed();
    res.json({ posts });
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve news feed' });
  }
}