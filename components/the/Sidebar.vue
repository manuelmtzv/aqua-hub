<script setup lang="ts">
const { isSidebarOpen, toggleSidebar } = useLayoutState();
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

    <div class="flex flex-col gap-4">
      <h2 v-if="isSidebarOpen">Menú principal</h2>

      <nav class="flex flex-col gap-[0.88rem]">
        <NuxtLink
          to="/app"
          :class="[
            'flex items-center gap-[0.62rem]',
            isSidebarOpen ? 'ml-[0.62rem]' : 'border rounded-md p-1',
          ]"
        >
          <Icon name="mdi:newspaper" :class="[!isSidebarOpen && 'text-2xl']" />
          <span v-show="isSidebarOpen">Muro</span>
        </NuxtLink>

        <NuxtLink
          to="/app"
          :class="[
            'flex items-center gap-[0.62rem]',
            isSidebarOpen ? 'ml-[0.62rem]' : 'border rounded-md p-1',
          ]"
        >
          <Icon
            name="mdi:account-group"
            :class="[!isSidebarOpen && 'text-2xl']"
          />
          <span v-show="isSidebarOpen">Usuarios</span>
        </NuxtLink>

        <NuxtLink
          to="/app"
          :class="[
            'flex items-center gap-[0.62rem]',
            isSidebarOpen ? 'ml-[0.62rem]' : 'border rounded-md p-1',
          ]"
        >
          <Icon name="mdi:account" :class="[!isSidebarOpen && 'text-2xl']" />
          <span v-show="isSidebarOpen">Mi perfil</span>
        </NuxtLink>

        <NuxtLink
          to="/app"
          :class="[
            'flex items-center gap-[0.62rem]',
            isSidebarOpen ? 'ml-[0.62rem]' : 'border rounded-md p-1',
          ]"
        >
          <Icon name="mdi:bell" :class="[!isSidebarOpen && 'text-2xl']" />
          <span v-show="isSidebarOpen">Configuración</span>
        </NuxtLink>

        <NuxtLink
          to="/app"
          :class="[
            'flex items-center gap-[0.62rem]',
            isSidebarOpen ? 'ml-[0.62rem]' : 'border rounded-md p-1',
          ]"
        >
          <Icon name="mdi:magnify" :class="[!isSidebarOpen && 'text-2xl']" />
          <span v-show="isSidebarOpen">Salir</span>
        </NuxtLink>
      </nav>
    </div>

    <div class="flex flex-col gap-4">
      <h2 v-if="isSidebarOpen">Explorar</h2>

      <nav class="flex flex-col gap-[0.88rem]">
        <NuxtLink
          to="/app"
          :class="[
            'flex items-center gap-[0.62rem]',
            isSidebarOpen ? 'ml-[0.62rem]' : 'border rounded-md p-1',
          ]"
        >
          <Icon name="mdi:bookmark" :class="[!isSidebarOpen && 'text-2xl']" />
          <span v-show="isSidebarOpen">Guardado</span>
        </NuxtLink>

        <NuxtLink
          to="/app"
          :class="[
            'flex items-center gap-[0.62rem]',
            isSidebarOpen ? 'ml-[0.62rem]' : 'border rounded-md p-1',
          ]"
        >
          <Icon
            name="mdi:account-group"
            :class="[!isSidebarOpen && 'text-2xl']"
          />
          <span v-show="isSidebarOpen">Foros</span>
        </NuxtLink>

        <NuxtLink
          to="/app"
          :class="[
            'flex items-center gap-[0.62rem]',
            isSidebarOpen ? 'ml-[0.62rem]' : 'border rounded-md p-1',
          ]"
        >
          <Icon name="mdi:label" :class="[!isSidebarOpen && 'text-2xl']" />
          <span v-show="isSidebarOpen">Grupos</span>
        </NuxtLink>

        <NuxtLink
          to="/app"
          :class="[
            'flex items-center gap-[0.62rem]',
            isSidebarOpen ? 'ml-[0.62rem]' : 'border rounded-md p-1',
          ]"
        >
          <Icon name="mdi:image" :class="[!isSidebarOpen && 'text-2xl']" />
          <span v-show="isSidebarOpen">Galería</span>
        </NuxtLink>
      </nav>
    </div>
  </aside>
</template>

<style></style>
