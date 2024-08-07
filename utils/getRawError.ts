import { H3Error } from "h3";
import type { ApiError } from "@/types/ApiError";

export function getRawError(error: any) {
  if (isH3Error(error)) {
    return (error as H3Error<ApiError>).data;
  }

  if (error instanceof Error) {
    return error;
  }

  if (typeof error === "string") {
    return new Error(error);
  }

  return new Error("An error occurred");
}
