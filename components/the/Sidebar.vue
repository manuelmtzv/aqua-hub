<script setup lang="ts"></script>

<template>
  <aside
    class="sidebar min-w-[300px] min-h-[100svh] max-h-[100svh] px-5 py-8 border-r flex flex-col gap-5"
  >
    <header class="flex items-center justify-between">
      <TheLogo />

      <button>
        <MdiIcon icon="mdiMenu" class="text-2xl" />
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
          <MdiIcon icon="mdiNewspaper" />
          <span>Muro</span>
        </NuxtLink>

        <NuxtLink
          to="/app"
          class="flex items-center gap-[0.62rem] ml-[0.62rem]"
        >
          <MdiIcon icon="mdiAccountGroup" />
          <span>Usuarios</span>
        </NuxtLink>

        <NuxtLink
          to="/app"
          class="flex items-center gap-[0.62rem] ml-[0.62rem]"
        >
          <MdiIcon icon="mdiAccount" />
          <span>Mi perfil</span>
        </NuxtLink>

        <NuxtLink
          to="/app"
          class="flex items-center gap-[0.62rem] ml-[0.62rem]"
        >
          <MdiIcon icon="mdiBell" />
          <span>Configuración</span>
        </NuxtLink>

        <NuxtLink
          to="/app"
          class="flex items-center gap-[0.62rem] ml-[0.62rem]"
        >
          <MdiIcon icon="mdiMagnify" />
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
          <MdiIcon icon="mdiBookmark" />
          <span>Guardado</span>
        </NuxtLink>

        <NuxtLink
          to="/app"
          class="flex items-center gap-[0.62rem] ml-[0.62rem]"
        >
          <MdiIcon icon="mdiAccountGroup" />
          <span>Foros</span>
        </NuxtLink>

        <NuxtLink
          to="/app"
          class="flex items-center gap-[0.62rem] ml-[0.62rem]"
        >
          <MdiIcon icon="mdiLabel" />
          <span>Grupos</span>
        </NuxtLink>

        <NuxtLink
          to="/app"
          class="flex items-center gap-[0.62rem] ml-[0.62rem]"
        >
          <MdiIcon icon="mdiImage" />
          <span>Galería</span>
        </NuxtLink>
      </nav>
    </div>
  </aside>
</template>

<style></style>
