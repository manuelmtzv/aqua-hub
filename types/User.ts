import type { Post } from "./Post";

export type User = {
  id: string;
  username: string;
  email: string;
  name: string;
  lastname: string;
  posts?: Post[];
  savedPosts?: Post[];
  followers?: User[];
  createdAt: string;
  updatedAt: string;
};
