import { Comment } from './interfaces/interfaces';

const comments: Comment[] = [];

export interface Comment {
    commentId: string;
    postId: string;
    userId: string;
    userName: string;
    commentBody: string;
    timestamp: string;
  }