import type { User } from "./User";

export type LoginRequest = {
  identifier: string;
  password: string;
};

export type LoginResponse = {
  data: User;
  accessToken: string;
  refreshToken: string;
  expiresIn: string;
};
