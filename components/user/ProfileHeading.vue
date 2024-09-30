<script setup lang="ts">
import type { User } from "@/types";

type UserProfileHeadingProps = {
  user: User;
};

defineProps<UserProfileHeadingProps>();
</script>

<template>
  <section class="flex flex-col gap-4">
    <div class="flex items-center gap-4">
      <img
        src="https://placehold.co/100"
        alt="avatar"
        class="w-16 h-16 rounded-full"
      />
      <div>
        <h1 class="text-2xl font-semibold">{{ user.name }}</h1>
        <p class="text-gray-500">{{ user.email }}</p>
      </div>
    </div>

    Hola
  </section>
</template>
