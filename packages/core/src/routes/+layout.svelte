<script lang="ts">
  import '../app.css';

  import {
    EnvironmentProvider,
    LocaleProvider,
    Toast,
    Toaster,
  } from '$lib/index.js';
  import {twMerge} from 'tailwind-merge';
  import Navbar from './navbar.svelte';
  import {toaster} from './shared/index.js';
  import Sidebar from './sidebar.svelte';

  let {children} = $props();
</script>

<EnvironmentProvider>
  <LocaleProvider locale="en-US">
    <div class="lg:flex lg:items-start">
      <Sidebar />

      <div class="grow">
        <Navbar />
        <main class="p-4 lg:p-12">
          {@render children()}
        </main>
      </div>
    </div>

    <Toaster {toaster}>
      <Toast.Root
        class={twMerge(
          'p-4',
          'border',
          'rounded',
          'bg-light',
          'duration-300',
          'transition-all',
          'min-w-[90vw]',
          'lg:min-w-[20rem]',
          'h-[var(--height)]',
          'z-[var(--z-index)]',
          '[translate:var(--x)_var(--y)_0]',
          'opacity-[var(--opacity)]',
          'scale-[var(--scale)]',
        )}
      >
        <Toast.Title class="font-medium" />
        <Toast.Description class="text-muted text-sm" />
        <Toast.CloseTrigger
          class="border-lighter mt-3 block h-12 w-full rounded border"
        >
          Close
        </Toast.CloseTrigger>
      </Toast.Root>
    </Toaster>
  </LocaleProvider>
</EnvironmentProvider>
