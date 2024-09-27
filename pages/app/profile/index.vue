<script setup lang="ts">
import { userRepository } from "@/repository/user.repository";

const { user } = useAuthState();

const { data: posts } = await useAsyncData("posts", () =>
  userRepository().getUserPosts(user.value?.id || "")
);
</script>

<template>
  <div>
    <h1>Profile</h1>

    <pre>{{ user }}</pre>

    <pre>{{ posts }}</pre>
  </div>
</template>
