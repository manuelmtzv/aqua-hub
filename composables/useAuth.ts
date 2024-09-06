import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  ValidateResponse,
} from "@/types/Auth";

export const useAuth = () => {
  const authState = useAuthState();
  const { updateTokens } = authState;
  const runtimeConfig = useRuntimeConfig();
  const fetch = useNuxtApp().$api;

  async function login(loginForm: LoginRequest) {
    const response = await fetch<LoginResponse>(
      `${runtimeConfig.public.API_BASE_URL}/auth/login`,
      {
        method: "POST",
        body: JSON.stringify(loginForm),
      }
    );

    updateTokens(
      response.accessToken,
      response.refreshToken,
      response.expiresIn
    );

    authState.user.value = response.data;
  }

  async function register(registerForm: RegisterRequest) {
    const response = await fetch<LoginResponse>(
      `${runtimeConfig.public.API_BASE_URL}/auth/register`,
      {
        method: "POST",
        body: JSON.stringify(registerForm),
      }
    );

    updateTokens(
      response.accessToken,
      response.refreshToken,
      response.expiresIn
    );

    authState.user.value = response.data;
  }

  async function logout() {
    authState.logout();
  }

  async function validate() {
    const user = await fetch<ValidateResponse>(
      `${runtimeConfig.public.API_BASE_URL}/auth/validate`,
      {
        headers: {
          Authorization: `Bearer ${useCookie("access_token").value}`,
        },
      }
    );

    authState.user.value = user.data;
  }

  async function refresh() {
    if (!authState.availableTokens.value) {
      useCookie("access_token").value = null;
      useCookie("refresh_token").value = null;

      throw new Error("No tokens available");
    }

    const response = await fetch<LoginResponse>(
      `${runtimeConfig.public.API_BASE_URL}/auth/refresh`,
      {
        method: "POST",
        body: JSON.stringify({
          refreshToken: useCookie("refresh_token").value,
        }),
      }
    );

    updateTokens(
      response.accessToken,
      response.refreshToken,
      response.expiresIn
    );

    authState.user.value = response.data;
  }

  async function validateOrRefresh() {
    try {
      return await validate();
    } catch (validationError) {
      return await refresh();
    }
  }

  return {
    login,
    register,
    logout,
    validate,
    refresh,
    validateOrRefresh,
  };
};
