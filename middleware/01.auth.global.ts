import { useToast } from "vue-toast-notification";

const whitelist = ["/auth/login", "/auth/register"];

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (whitelist.includes(to.path)) {
    return;
  }

  const authState = useAuthState();
  const { validate, refresh } = useAuth();
  const toast = useToast();

  if (!authState.availableTokens.value) {
    return navigateTo("/auth/login");
  }

  try {
    await validate();
  } catch (validationError) {
    try {
      await refresh();
    } catch (refreshError) {
      toast.warning("Your session has expired. Please log in again.");
      return navigateTo("/auth/login");
    }
  }
});
