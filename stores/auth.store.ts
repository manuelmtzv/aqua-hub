import type { LoginResponse } from "~/types/Auth";
import type { User } from "~/types/User";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User>();
  const accessToken = useCookie("access_token", { path: "/" });
  const refreshToken = useCookie("refresh_token", { path: "/" });

  const login = (response: LoginResponse) => {
    user.value = response.data;
    accessToken.value = response.accessToken;
    refreshToken.value = response.refreshToken;
  };

  return {
    user,
    accessToken,
    refreshToken,
    login,
  };
});
