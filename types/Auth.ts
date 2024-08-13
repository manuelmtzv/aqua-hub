import type { User } from "./User";

export type ValidateResponse = {
  data: User;
  message: string;
};

export type LoginRequest = {
  identifier: string;
  password: string;
};

export type RegisterRequest = {
  name: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  birthdate: string;
};

export type LoginResponse = {
  data: User;
  accessToken: string;
  refreshToken: string;
  expiresIn: string;
};
