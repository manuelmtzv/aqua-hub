import type { User } from "@/types/User";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User>();
  const accessToken = useCookie("access_token", { path: "/" });
  const refreshToken = useCookie("refresh_token", { path: "/" });

  function updateTokens(
    newAccessToken: string,
    newRefreshToken: string,
    expiresIn: string
  ) {
    accessToken.value = useCookie("access_token", {
      maxAge: Number(expiresIn),
      priority: "high",
    }).value = newAccessToken;

    refreshToken.value = useCookie("refresh_token", {
      priority: "high",
    }).value = newRefreshToken;
  }

  function logout() {
    accessToken.value = null;
    refreshToken.value = null;
    user.value = undefined;
  }

  return {
    user,
    accessToken,
    refreshToken,
    availableTokens: computed(
      () => !!accessToken.value && !!refreshToken.value
    ),
    updateTokens,
    logout,
  };
});
