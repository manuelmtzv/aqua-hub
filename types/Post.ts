import type { Forum } from "./Forum";
import type { Topic } from "./Topic";

export type Post = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  author: string;
  language: string;
  Forum: Forum;
  topic: Topic;
  topics: Topic[];
  reactions: any[];
};
