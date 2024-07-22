import type { User } from "./User";

export type LoginResponse = {
  data: User;
  token: string;
  expiresIn: string;
};
