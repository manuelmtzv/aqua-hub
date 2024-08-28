import type { Forum, User, Topic, Comment } from "./";

export type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  author: User;
  language: string;
  Forum: Forum;
  topic: Topic;
  topics: Topic[];
  reactions: any[];
  comments: Comment[];
};
