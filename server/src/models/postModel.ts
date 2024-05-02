import { Post } from './interfaces/interfaces';

const posts: Post[] = [];

export interface Post {
  postId: string;
  userId: string;
  userName: string;
  body: string;
  imageUrl?: string;
  sharedPostId?: string;
  timestamp: string;
  reactionCount: number;
}

export function getAllPosts(): Post[] {
  return posts;
}