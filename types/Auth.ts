import type { User } from "./User";

export type LoginResponse = {
  data: User;
  accessToken: string;
  refreshToken: string;
  expiresIn: string;
};
