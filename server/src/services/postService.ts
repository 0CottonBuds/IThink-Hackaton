import { Post } from './interfaces/interfaces';
import * as postModel from './models/postModel';
import { generatePostId } from './utils/generateId';

export function createPost(userId: string, userName: string, body: string, imageUrl?: string, sharedPostId?: string): Post {
  const newPost: Post = {
    postId: generatePostId(),
    userId,
    userName,
    body,
    imageUrl,
    sharedPostId,
    timestamp: new Date().toISOString(),
    reactionCount: 0,
  };

  return postModel.createPost(newPost);
}

export function getNewsFeed(): Post[] {
  return postModel.getAllPosts();
}