<template>
  <div>
    <section
      class="presentation relative flex flex-col items-center gap-12 py-24 text-center container"
    >
      <p class="text-3xl font-bold join">Únete a la comunidad</p>

      <h1 class="max-w-[48rem] text-7xl font-black leading-tight">
        Comparte tus conocimientos y aprende de otros
      </h1>

      <p class="max-w-[48rem] text-3xl text-[1.75rem]">
        <span class="underline">Fishkeepers Hub</span>, es un espacio para
        <span class="font-bold">compartir</span> tus experiencias y
        <span class="font-bold">aprender</span> de otros entusiastas de la
        <span class="font-bold">acuariofilia</span>. Ya seas principiante o un
        experto, siempre hay algo nuevo que
        <span class="font-bold">descubrir</span>.
      </p>

      <button class="button button--black font-semibold">Empieza ahora</button>

      <div class="absolute inset-0 -z-10 icons">
        <img
          src="/svg/home/fishIcon.one.svg"
          alt="Fish Icon"
          class="one absolute top-32 left-[12%] w-[4.5rem]"
        />

        <img
          src="/svg/home/fishIcon.two.svg"
          alt="Fish Icon"
          class="two absolute top-24 right-[12%] w-[4.5rem]"
        />

        <img
          src="/svg/home/fishIcon.three.svg"
          alt="Fish Icon"
          class="three absolute bottom-10 left-[16%] w-[4.5rem]"
        />

        <img
          src="/svg/home/fishIcon.four.svg"
          alt="Fish Icon"
          class="four absolute bottom-28 right-[16%] w-[4.5rem]"
        />
      </div>
    </section>

    <section class="container"></section>
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
