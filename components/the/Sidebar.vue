<script setup lang="ts">
const { isSidebarOpen, toggleSidebar } = useLayoutState();
const { t } = useI18n();
</script>

<template>
  <aside
    :class="[
      'sidebar min-h-[100svh] max-h-[100svh] px-5 py-6 border-r flex flex-col gap-5',
      isSidebarOpen ? 'min-w-[300px]' : 'min-w-[0px]',
    ]"
  >
    <header class="flex items-center justify-between h-8">
      <TheLogo v-if="isSidebarOpen" />

      <button
        v-if="isSidebarOpen"
        class="flex border rounded-md p-1"
        @click="toggleSidebar"
      >
        <Icon name="mdi:chevron-double-left" class="text-2xl my-auto" />
      </button>

      <button v-else class="flex border rounded-md p-1" @click="toggleSidebar">
        <Icon name="mdi:chevron-double-right" class="text-2xl" />
      </button>
    </header>

    <hr />

    <AppSearchBar />

    <div class="flex flex-col gap-4">
      <h2 v-if="isSidebarOpen">{{ t("navigationMain") }}</h2>

      <nav :class="['flex flex-col gap-2', !isSidebarOpen && 'gap-[0.88rem]']">
        <NuxtLink
          to="/app/feed"
          :class="[
            'flex items-center gap-[0.62rem] rounded-md hover:bg-gray-50 transition-colors link',
            isSidebarOpen ? 'px-3 py-1.5' : 'border rounded-md p-1',
          ]"
        >
          <Icon name="mdi:newspaper" :class="[!isSidebarOpen && 'text-2xl']" />
          <span v-show="isSidebarOpen">{{ t("navigationFeed") }}</span>
        </NuxtLink>

        <NuxtLink
          to="/app/people"
          :class="[
            'flex items-center gap-[0.62rem] rounded-md hover:bg-gray-50 transition-colors link',
            isSidebarOpen ? 'px-3 py-1.5' : 'border rounded-md p-1',
          ]"
        >
          <Icon
            name="mdi:account-group"
            :class="[!isSidebarOpen && 'text-2xl']"
          />
          <span v-show="isSidebarOpen">{{ t("navigationUsers") }}</span>
        </NuxtLink>

        <NuxtLink
          to="/app/profile"
          :class="[
            'flex items-center gap-[0.62rem] rounded-md hover:bg-gray-50 transition-colors link',
            isSidebarOpen ? 'px-3 py-1.5' : 'border rounded-md p-1',
          ]"
        >
          <Icon name="mdi:account" :class="[!isSidebarOpen && 'text-2xl']" />
          <span v-show="isSidebarOpen">{{ t("navigationProfile") }}</span>
        </NuxtLink>

        <NuxtLink
          to="/app/notifications"
          :class="[
            'flex items-center gap-[0.62rem] rounded-md hover:bg-gray-50 transition-colors link',
            isSidebarOpen ? 'px-3 py-1.5' : 'border rounded-md p-1',
          ]"
        >
          <Icon name="mdi:bell" :class="[!isSidebarOpen && 'text-2xl']" />
          <span v-show="isSidebarOpen">{{ t("navigationNotifications") }}</span>
        </NuxtLink>

        <NuxtLink
          to="/app/settings"
          :class="[
            'flex items-center gap-[0.62rem] rounded-md hover:bg-gray-50 transition-colors link',
            isSidebarOpen ? 'px-3 py-1.5' : 'border rounded-md p-1',
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
          to="/app/saved"
          :class="[
            'flex items-center gap-[0.62rem] rounded-md hover:bg-gray-50 transition-colors link',
            isSidebarOpen ? 'px-3 py-1.5' : 'border rounded-md p-1',
          ]"
        >
          <Icon name="mdi:bookmark" :class="[!isSidebarOpen && 'text-2xl']" />
          <span v-show="isSidebarOpen">{{ t("navigationSaved") }}</span>
        </NuxtLink>

        <NuxtLink
          to="/app/forums"
          :class="[
            'flex items-center gap-[0.62rem] rounded-md hover:bg-gray-50 transition-colors link',
            isSidebarOpen ? 'px-3 py-1.5' : 'border rounded-md p-1',
          ]"
        >
          <Icon
            name="mdi:account-group"
            :class="[!isSidebarOpen && 'text-2xl']"
          />
          <span v-show="isSidebarOpen">{{ t("navigationForums") }}</span>
        </NuxtLink>

        <NuxtLink
          to="/app/topics"
          :class="[
            'flex items-center gap-[0.62rem] rounded-md hover:bg-gray-50 transition-colors link',
            isSidebarOpen ? 'px-3 py-1.5' : 'border rounded-md p-1',
          ]"
        >
          <Icon name="mdi:label" :class="[!isSidebarOpen && 'text-2xl']" />
          <span v-show="isSidebarOpen">{{ t("navigationTopics") }}</span>
        </NuxtLink>

        <NuxtLink
          to="/app/gallery"
          :class="[
            'flex items-center gap-[0.62rem] rounded-md hover:bg-gray-50 transition-colors link',
            isSidebarOpen ? 'px-3 py-1.5' : 'border rounded-md p-1',
          ]"
        >
          <Icon name="mdi:image" :class="[!isSidebarOpen && 'text-2xl']" />
          <span v-show="isSidebarOpen">{{ t("navigationGallery") }}</span>
        </NuxtLink>
      </nav>
    </div>
  </aside>
</template>

<style setup>
.link[aria-current="page"] {
  @apply bg-gray-50 shadow-sm;
}
</style>
