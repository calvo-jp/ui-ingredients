<script lang="ts">
  import {navbarStore} from '$lib/stores';
  import {Menu05Icon} from '@untitled-theme/icons-svelte';
</script>

<header
  class="fixed left-0 top-0 z-sticky h-16 w-full border-b border-neutral-800 bg-neutral-950 px-5 md:px-8 lg:px-12"
>
  <div class="flex h-full items-center justify-center">
    <div class="flex items-center gap-2">
      <button
        type="button"
        onclick={navbarStore.drawer.toggle}
        class="lg:hidden"
      >
        <Menu05Icon class="size-6" />
        <span class="sr-only">Open drawer</span>
      </button>
      <a href="/">UI Ingredients</a>
    </div>

    <div class="grow"></div>
    <div class="flex gap-3"></div>
  </div>
</header>

<div class="h-16"></div>
