<script lang="ts">
  import GithubIcon from '$lib/github-icon.svelte';
  import MoonIcon from '$lib/moon-icon.svelte';
  import {navbarStore} from '$lib/stores';
  import SunIcon from '$lib/sun-icon.svelte';
  import {Menu05Icon} from '@untitled-theme/icons-svelte';
  import {useTheme} from 'svelte-os-themes';

  let theme = useTheme();
</script>

<header
  class="fixed left-0 top-0 z-sticky h-16 w-full border-b border-neutral-200 bg-white px-5 dark:border-neutral-800 dark:bg-neutral-950 md:px-8 lg:px-12"
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
      <a href="/" class="font-mono font-bold tracking-tight lg:text-lg">
        UI Ingredients
      </a>
    </div>

    <div class="grow"></div>
    <div class="flex gap-3 lg:gap-4">
      <button
        {...theme.getTriggerProps({
          value: 'auto',
          sequence: ['dark', 'light'],
        })}
      >
        {#if theme.value === 'dark'}
          <MoonIcon class="size-6" />
          <span class="sr-only">Go to light mode</span>
        {:else}
          <SunIcon class="size-6" />
          <span class="sr-only">Go to dark mode</span>
        {/if}
      </button>

      <a
        href="https://github.com/calvo-jp/ui-ingredients"
        target="_blank"
        rel="noreferrer"
      >
        <GithubIcon class="size-6" />
        <span class="sr-only">Github</span>
      </a>
    </div>
  </div>
</header>

<div class="h-16"></div>
