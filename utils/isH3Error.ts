import { H3Error } from "h3";

export function isH3Error(error: unknown): error is H3Error {
  return (error as H3Error).data !== undefined;
}
