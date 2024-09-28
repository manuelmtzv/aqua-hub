<template>
  <article class="flex flex-col gap-4">
    <div class="flex items-center space-x-4">
      <USkeleton class="h-12 w-12" :ui="{ rounded: 'rounded-full' }" />
      <div class="space-y-2">
        <USkeleton class="h-4 w-36" />
        <USkeleton class="h-4 w-44" />
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <USkeleton class="h-4 w-96 mb-2" />
      <USkeleton class="h-4 w-full" />
      <USkeleton class="h-4 w-full" />
      <USkeleton class="h-4 w-full" />
      <USkeleton class="h-4 w-full" />

      <USkeleton class="h-4 w-full mt-2" />
      <USkeleton class="h-4 w-full" />
      <USkeleton class="h-4 w-full mb-2" />

      <div class="flex justify-between">
        <div class="flex gap-4">
          <USkeleton class="h-4 w-16" />
          <USkeleton class="h-4 w-16" />
        </div>

        <USkeleton class="h-4 w-6" />
      </div>
    </div>
  </article>
</template>
