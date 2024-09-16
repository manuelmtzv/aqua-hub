import { useWindowSize } from "@vueuse/core";
import { defineStore } from "pinia";

export const useLayoutStore = defineStore(
  "layoutStore",
  () => {
    const isSidebarOpen = ref(true);
    const { width } = useWindowSize();

    watchEffect(() => {
      if (width.value < 1024 && isSidebarOpen.value) {
        isSidebarOpen.value = false;
      }
    });

    return {
      isSidebarOpen,
      toggleSidebar: () => {
        if (width.value < 1024) {
          isSidebarOpen.value = false;
        }

        isSidebarOpen.value = !isSidebarOpen.value;
      },
    };
  },
  {
    persist: true,
  }
);
