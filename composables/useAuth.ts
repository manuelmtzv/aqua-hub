import { ref } from "vue";
import type { LoginRequest, LoginResponse } from "@/types/Auth";

export const useAuth = () => {
  const isLoading = ref(false);
  const error = ref(null);
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

  return {
    isLoading,
    error,
    login,
    register,
    logout,
  };
};
