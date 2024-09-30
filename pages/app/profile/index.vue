<script setup lang="ts">
import { userRepository } from "@/repository/user.repository";

const { data: user } = await useAsyncData("me", userRepository().getMe);
</script>

<template>
  <template v-if="user">
    <UserProfileHeading :user="user" />
  </template>

  <p v-else>Loading...</p>
</template>
