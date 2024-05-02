import { Comment } from './interfaces/interfaces';
import * as commentModel from './models/commentModel';
import { generateCommentId } from './utils/generateId';

export function createComment(postId: string, userId: string, userName: string, commentBody: string): Comment {
  const newComment: Comment = {
    commentId: generateCommentId(),
    postId,
    userId,
    userName,
    commentBody,
    timestamp: new Date().toISOString(),
  };

  return commentModel.createComment(newComment);
}