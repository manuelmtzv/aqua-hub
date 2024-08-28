import type { Post } from "./Post";
import type { User } from "./User";

export type CommentTarget = "Post" | "Comment";

export type Comment = {
  id: string;
  content: string;
  target: CommentTarget;
  replyTo?: Comment;
  author: User;
  post: Post;
  replies: Comment[];
  reactions: any[];
};
