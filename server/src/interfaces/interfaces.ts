export interface User {
    email: string;
    userId: string;
    userName: string;
    password: string;
    bio?: string;
  }
  
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
  
  export interface Comment {
    commentId: string;
    postId: string;
    userId: string;
    userName: string;
    commentBody: string;
    timestamp: string;
  }
  
  export interface Reaction {
    postId: string;
    userId: string;
  }