<script lang="ts">
  import {Badge} from '$lib/components';
  import {navbarStore} from '$lib/stores';
  import {Menu05Icon} from '@untitled-theme/icons-svelte';
  import {useTheme} from 'svelte-os-themes';
  import packageJson from 'ui-ingredients/package.json';

  let theme = useTheme();
</script>

<header
  class="fixed left-0 right-[var(--scrollbar-width,0)] top-0 z-sticky h-16 border-b border-neutral-200 bg-white px-5 dark:border-neutral-800 dark:bg-neutral-950 md:px-8 lg:px-12"
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
      <a href="/" class="font-lexend font-semibold tracking-tight lg:text-xl">
        UI Ingredients
      </a>
      <Badge>v{packageJson.version}</Badge>
    </div>

    <div class="grow"></div>
    <div class="flex gap-3 lg:gap-4">
      <button
        {...theme.getTriggerProps({
          value: 'auto',
          sequence: ['dark', 'light'],
        })}
      >
        {#if theme.current === 'dark'}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 256 256"
            class="size-6"
          >
            <rect width="256" height="256" fill="none"></rect>
            <path
              d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"
            ></path>
          </svg>
          <span class="sr-only">Light mode</span>
        {:else}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            viewBox="0 0 256 256"
            class="size-6"
          >
            <rect width="256" height="256" fill="none"></rect>
            <path
              d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"
            ></path>
          </svg>

          <span class="sr-only">Dark mode</span>
        {/if}
      </button>

      <a
        href="https://github.com/calvo-jp/ui-ingredients"
        data-sveltekit-preload-data="off"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          class="size-6"
        >
          <path
            fill="currentColor"
            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
          />
        </svg>

        <span class="sr-only">Github</span>
      </a>
    </div>
  </div>
</header>

<div class="h-16"></div>
