import { H3Error } from "h3";
import { isH3Error } from "./isH3Error";
import type { ApiError } from "~/types/ApiError";

export function getError(
  error: any,
  { defaultErrorMessage = "An error occurred" } = {}
) {
  if (isH3Error(error)) {
    return (error as H3Error<ApiError>).data?.message || defaultErrorMessage;
  }

  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "string") {
    return error;
  }

  return defaultErrorMessage;
}
