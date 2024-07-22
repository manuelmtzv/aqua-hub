import { LoginResponse } from "~/types/Auth";
import { handleError } from "~/utils/handleError";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const { identifier, password } = body;

    const response = await $fetch<LoginResponse>(
      `${process.env.FISHKEEPERS_HUB_API_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ identifier, password }),
      }
    );

    const { data, token, expiresIn } = response;

    setCookie(event, "token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: parseInt(expiresIn),
    });

    return {
      statusCode: 200,
      data,
    };
  } catch (err) {
    return handleError(err, event);
  }
});
