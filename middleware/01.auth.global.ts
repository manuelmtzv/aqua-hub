import { useToast } from "vue-toast-notification";

const whitelist = ["/", "/about", "/auth/login", "/auth/register"];

export default defineNuxtRouteMiddleware(async (to, from) => {
  const localePath = useLocalePath();

  const langPattern = /^\/[a-z]{2}(\/|$)/;
  let path = to.path;

  if (langPattern.test(path)) {
    path = path.replace(langPattern, "/");
  }

  if (whitelist.includes(path)) {
    return;
  }

  const authState = useAuthState();
  const { validate, refresh } = useAuth();
  const toast = useToast();

  if (!authState.availableTokens.value) {
    return navigateTo(localePath("/auth/login"));
  }

  try {
    await validate();
  } catch (validationError) {
    try {
      await refresh();
    } catch (refreshError) {
      toast.warning("Your session has expired. Please log in again.");
      return navigateTo(localePath("/auth/login"));
    }
  }
});
