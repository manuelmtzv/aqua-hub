icon
<script setup lang="ts">
definePageMeta({
  layout: "public",
});

const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <div>
    <section
      class="presentation relative flex flex-col items-center gap-12 pt-16 pb-24 text-center container min-h-[calc(100svh-5.125rem)]"
    >
      <p class="text-3xl font-bold join">{{ t("welcomeSubtitle") }}</p>

      <h1 class="max-w-[48rem] text-7xl font-black leading-tight">
        {{ t("welcome") }}
      </h1>

      <p
        class="max-w-[48rem] text-3xl text-[1.75rem]"
        v-html="t('welcomeIntroduction')"
      ></p>

      <NuxtLink
        :to="localePath('/auth/register')"
        class="button button--black font-semibold"
      >
        {{ t("welcomeStart") }}
      </NuxtLink>

      <div class="absolute inset-0 -z-10 icons">
        <img
          src="/svg/home/fishIcon.one.svg"
          alt="Fish Icon"
          class="one absolute top-32 left-[12%] w-[4.5rem] icon"
        />

        <img
          src="/svg/home/fishIcon.two.svg"
          alt="Fish Icon"
          class="two absolute top-24 right-[12%] w-[4.5rem] icon"
        />

        <img
          src="/svg/home/fishIcon.three.svg"
          alt="Fish Icon"
          class="three absolute bottom-10 left-[16%] w-[4.5rem] icon"
        />

        <img
          src="/svg/home/fishIcon.four.svg"
          alt="Fish Icon"
          class="four absolute bottom-28 right-[16%] w-[4.5rem] icon"
        />
      </div>
    </section>

    <section class="container">
      <div
        class="p-10 bg-green-900 rounded-lg text-white grid grid-cols-3 gap-12"
      >
        <div class="feature">
          <h4 class="text-xl font-bold">{{ t("welcomeForumsTitle") }}</h4>
          <p class="text-lg">
            {{ t("welcomeForumsDescription") }}
          </p>
        </div>

        <div class="feature">
          <h4 class="text-xl font-bold">{{ t("welcomeInteractionsTitle") }}</h4>
          <p class="text-lg">
            {{ t("welcomeInteractionsDescription") }}
          </p>
        </div>

        <div class="feature">
          <h4 class="text-xl font-bold">{{ t("welcomeInterestsTitle") }}</h4>
          <p class="text-lg">
            {{ t("welcomeInterestsDescription") }}
          </p>
        </div>
      </div>
    </section>

    <section class="container my-20">
      <div class="p-10 flex gap-5">
        <div class="flex flex-col gap-2">
          <h2 class="text-2xl font-bold">
            {{ t("welcomeLanguagesTitle") }}
          </h2>

          <p class="text-xl">
            {{ t("welcomeLanguagesDescription") }}
          </p>
        </div>

        <img
          src="/svg/home/multilanguage.svg"
          alt="Multilanguage support icon"
          class="max-w-[9.75rem] icon"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.presentation {
  animation: fadeIn 1s;
}

.join {
  color: 000;
  background: linear-gradient(90deg, #1b49bb 0%, #2fff5c 100%);
  background-clip: text;
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  animation: shine 6s linear infinite;
}

.icons img {
  animation: moveUpDown 2s infinite;
}

.icons .one {
  --bounce-offset: -1rem;
  animation-duration: 2400ms;
}

.icons .two {
  --bounce-offset: -0.5rem;
  animation-duration: 2500ms;
}

.icons .three {
  --bounce-offset: -1.3rem;
  animation-duration: 2800ms;
}

.icons .four {
  --bounce-offset: -1.9rem;
  animation-duration: 3400ms;
}

.icon {
  @apply filter dark:invert;
}

.feature {
  @apply flex flex-col gap-2;
}

@keyframes moveUpDown {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(var(--bounce-offset));
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes shine {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
