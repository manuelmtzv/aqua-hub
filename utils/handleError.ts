import type { H3Event } from "h3";

export function handleError(error: any, event?: H3Event) {
  console.error("API Error:", error);

  if (event) {
    setResponseStatus(event, error.statusCode || 500);
  }

  if (error.data) {
    return {
      statusCode: error.statusCode || 500,
      message: error.message || "An error occurred",
      data: error.data,
    };
  }

  return {
    statusCode: error.statusCode || 500,
    message: error.message || "An unexpected error occurred",
    data: {
      success: false,
    },
  };
}
