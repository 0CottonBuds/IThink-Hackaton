import { Request, Response } from 'express';
import * as commentService from './services/commentService';

export function createComment(req: Request, res: Response) {
  const { postId, userId, userName, commentBody } = req.body;

  try {
    const newComment = commentService.createComment(postId, userId, userName, commentBody);
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create comment' });
  }
}