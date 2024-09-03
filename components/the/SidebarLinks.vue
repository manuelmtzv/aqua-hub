<script setup lang="ts">
const { isSidebarOpen } = useLayoutState();
const { t } = useI18n();
const localeRoute = useLocaleRoute();
</script>

<template>
  <section class="flex flex-col gap-5 overflow-y-auto">
    <div class="flex flex-col gap-4">
      <h2 v-if="isSidebarOpen">{{ t("navigationMain") }}</h2>

      <nav :class="['flex flex-col gap-2', !isSidebarOpen && 'gap-[0.88rem]']">
        <NuxtLink
          :to="localeRoute('/app/feed')"
          :class="[
            'flex items-center gap-[0.62rem] rounded-md hover:bg-gray-50  link dark:hover:bg-dark-850',
            isSidebarOpen ? 'px-3 py-1.5' : 'rounded-md p-1',
          ]"
        >
          <Icon name="mdi:newspaper" :class="[!isSidebarOpen && 'text-2xl']" />
          <span v-show="isSidebarOpen">{{ t("navigationFeed") }}</span>
        </NuxtLink>

        <NuxtLink
          :to="localeRoute('/app/people')"
          :class="[
            'flex items-center gap-[0.62rem] rounded-md hover:bg-gray-50  link dark:hover:bg-dark-850',
            isSidebarOpen ? 'px-3 py-1.5' : 'rounded-md p-1',
          ]"
        >
          <Icon
            name="mdi:account-group"
            :class="[!isSidebarOpen && 'text-2xl']"
          />
          <span v-show="isSidebarOpen">{{ t("navigationUsers") }}</span>
        </NuxtLink>

        <NuxtLink
          :to="localeRoute('/app/profile')"
          :class="[
            'flex items-center gap-[0.62rem] rounded-md hover:bg-gray-50  link dark:hover:bg-dark-850',
            isSidebarOpen ? 'px-3 py-1.5' : 'rounded-md p-1',
          ]"
        >
          <Icon name="mdi:account" :class="[!isSidebarOpen && 'text-2xl']" />
          <span v-show="isSidebarOpen">{{ t("navigationProfile") }}</span>
        </NuxtLink>

        <NuxtLink
          :to="localeRoute('/app/notifications')"
          :class="[
            'flex items-center gap-[0.62rem] rounded-md hover:bg-gray-50  link dark:hover:bg-dark-850',
            isSidebarOpen ? 'px-3 py-1.5' : 'rounded-md p-1',
          ]"
        >
          <Icon name="mdi:bell" :class="[!isSidebarOpen && 'text-2xl']" />
          <span v-show="isSidebarOpen">{{ t("navigationNotifications") }}</span>
        </NuxtLink>

        <NuxtLink
          :to="localeRoute('/app/settings')"
          :class="[
            'flex items-center gap-[0.62rem] rounded-md hover:bg-gray-50  link dark:hover:bg-dark-850',
            isSidebarOpen ? 'px-3 py-1.5' : 'rounded-md p-1',
          ]"
        >
          <Icon name="mdi:settings" :class="[!isSidebarOpen && 'text-2xl']" />
          <span v-show="isSidebarOpen">{{ t("navigationSettings") }}</span>
        </NuxtLink>
      </nav>
    </div>

    <div class="flex flex-col gap-4">
      <h2 v-if="isSidebarOpen">{{ t("navigationExplore") }}</h2>

      <nav :class="['flex flex-col gap-2', !isSidebarOpen && 'gap-[0.88rem]']">
        <NuxtLink
          :to="localeRoute('/app/saved')"
          :class="[
            'flex items-center gap-[0.62rem] rounded-md hover:bg-gray-50  link dark:hover:bg-dark-850',
            isSidebarOpen ? 'px-3 py-1.5' : 'rounded-md p-1',
          ]"
        >
          <Icon name="mdi:bookmark" :class="[!isSidebarOpen && 'text-2xl']" />
          <span v-show="isSidebarOpen">{{ t("navigationSaved") }}</span>
        </NuxtLink>

        <NuxtLink
          :to="localeRoute('/app/forums')"
          :class="[
            'flex items-center gap-[0.62rem] rounded-md hover:bg-gray-50  link dark:hover:bg-dark-850',
            isSidebarOpen ? 'px-3 py-1.5' : 'rounded-md p-1',
          ]"
        >
          <Icon
            name="mdi:account-group"
            :class="[!isSidebarOpen && 'text-2xl']"
          />
          <span v-show="isSidebarOpen">{{ t("navigationForums") }}</span>
        </NuxtLink>

        <NuxtLink
          :to="localeRoute('/app/topics')"
          :class="[
            'flex items-center gap-[0.62rem] rounded-md hover:bg-gray-50  link dark:hover:bg-dark-850',
            isSidebarOpen ? 'px-3 py-1.5' : 'rounded-md p-1',
          ]"
        >
          <Icon name="mdi:label" :class="[!isSidebarOpen && 'text-2xl']" />
          <span v-show="isSidebarOpen">{{ t("navigationTopics") }}</span>
        </NuxtLink>

        <NuxtLink
          :to="localeRoute('/app/gallery')"
          :class="[
            'flex items-center gap-[0.62rem] rounded-md hover:bg-gray-50  link dark:hover:bg-dark-850',
            isSidebarOpen ? 'px-3 py-1.5' : 'rounded-md p-1',
          ]"
        >
          <Icon name="mdi:image" :class="[!isSidebarOpen && 'text-2xl']" />
          <span v-show="isSidebarOpen">{{ t("navigationGallery") }}</span>
        </NuxtLink>
      </nav>
    </div>
  </section>
</template>

<style scoped>
.link {
  @apply text-sm;
}
.link[aria-current="page"] {
  @apply bg-gray-50 shadow-sm dark:bg-dark-850;
}
</style>
