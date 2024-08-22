<script setup lang="ts">
const { isSidebarOpen, toggleSidebar } = useLayoutState();
</script>

<template>
  <aside
    v-if="isSidebarOpen"
    class="sidebar min-w-[300px] min-h-[100svh] max-h-[100svh] px-5 py-6 border-r flex flex-col gap-5"
  >
    <header class="flex items-center justify-between">
      <TheLogo />

      <button class="flex" @click="toggleSidebar">
        <Icon name="mdi:menu" class="text-2xl my-auto" />
      </button>
    </header>

    <hr />

    <div class="flex flex-col gap-4">
      <h2>Menú principal</h2>

      <nav class="flex flex-col gap-[0.88rem]">
        <NuxtLink
          to="/app"
          class="flex items-center gap-[0.62rem] ml-[0.62rem]"
        >
          <Icon name="mdi:newspaper" />
          <span>Muro</span>
        </NuxtLink>

        <NuxtLink
          to="/app"
          class="flex items-center gap-[0.62rem] ml-[0.62rem]"
        >
          <Icon name="mdi:account-group" />
          <span>Usuarios</span>
        </NuxtLink>

        <NuxtLink
          to="/app"
          class="flex items-center gap-[0.62rem] ml-[0.62rem]"
        >
          <Icon name="mdi:account" />
          <span>Mi perfil</span>
        </NuxtLink>

        <NuxtLink
          to="/app"
          class="flex items-center gap-[0.62rem] ml-[0.62rem]"
        >
          <Icon name="mdi:bell" />
          <span>Configuración</span>
        </NuxtLink>

        <NuxtLink
          to="/app"
          class="flex items-center gap-[0.62rem] ml-[0.62rem]"
        >
          <Icon name="mdi:magnify" />
          <span>Salir</span>
        </NuxtLink>
      </nav>
    </div>

    <div class="flex flex-col gap-4">
      <h2>Explorar</h2>

      <nav class="flex flex-col gap-[0.88rem]">
        <NuxtLink
          to="/app"
          class="flex items-center gap-[0.62rem] ml-[0.62rem]"
        >
          <Icon name="mdi:bookmark" />
          <span>Guardado</span>
        </NuxtLink>

        <NuxtLink
          to="/app"
          class="flex items-center gap-[0.62rem] ml-[0.62rem]"
        >
          <Icon name="mdi:account-group" />
          <span>Foros</span>
        </NuxtLink>

        <NuxtLink
          to="/app"
          class="flex items-center gap-[0.62rem] ml-[0.62rem]"
        >
          <Icon name="mdi:label" />
          <span>Grupos</span>
        </NuxtLink>

        <NuxtLink
          to="/app"
          class="flex items-center gap-[0.62rem] ml-[0.62rem]"
        >
          <Icon name="mdi:image" />
          <span>Galería</span>
        </NuxtLink>
      </nav>
    </div>
  </aside>
</template>

<style></style>
