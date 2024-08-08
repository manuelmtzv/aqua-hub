import type {
  LoginRequest,
  LoginResponse,
  ValidateResponse,
} from "@/types/Auth";

export const useAuth = () => {
  const authState = useAuthState();
  const { updateTokens } = authState;

  const runtimeConfig = useRuntimeConfig();

  async function login(loginForm: LoginRequest) {
    const response = await $fetch<LoginResponse>(
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

  async function register() {
    console.log("register");
  }

  async function logout() {
    console.log("logout");
  }

  async function validate() {
    const user = await $fetch<ValidateResponse>(
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
    }

    const response = await $fetch<LoginResponse>(
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
