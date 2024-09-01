import { defineStore } from "pinia";

export const useLayoutStore = defineStore(
  "layoutStore",
  () => {
    const isSidebarOpen = ref(true);

    return {
      isSidebarOpen,
      toggleSidebar: () => {
        isSidebarOpen.value = !isSidebarOpen.value;
      },
    };
  },
  {
    persist: true,
  }
);
