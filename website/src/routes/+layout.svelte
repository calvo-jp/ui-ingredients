<script>
  import '@fontsource/fira-code/400.css';
  import '@fontsource/inter/400.css';
  import '@fontsource/inter/500.css';
  import '@fontsource/inter/600.css';
  import '@fontsource/inter/700.css';
  import '@fontsource/lexend/400.css';
  import '@fontsource/lexend/500.css';
  import '@fontsource/lexend/600.css';
  import '@fontsource/lexend/700.css';
  import '../app.css';

  import {ThemeProvider} from 'svelte-os-themes';
  import Navbar from './navbar.svelte';
  import PageControl from './page-control.svelte';
  import Sidebar from './sidebar.svelte';
  import Toc from './toc.svelte';

  let {children} = $props();
</script>

<ThemeProvider fallback="dark">
  <Navbar />

  <div
    class="h-[calc(theme(height.dvh)-theme(spacing.16))] lg:flex lg:items-start lg:justify-center"
  >
    <Sidebar />

    <main class="flex min-h-full flex-col p-5 md:p-8 lg:grow lg:p-16 xl:p-20">
      <section
        class="grow lg:mx-auto lg:w-full lg:max-w-screen-md"
        data-toc-root
      >
        <div
          class="prose prose-neutral min-w-full dark:prose-invert prose-headings:font-lexend before:prose-p:content-none after:prose-p:content-none prose-a:underline-offset-2 before:prose-code:content-none after:prose-code:content-none lg:prose-code:text-sm"
        >
          {@render children()}
        </div>
      </section>

      <section class="mt-8">
        <PageControl />
      </section>
    </main>

    <Toc />
  </div>
</ThemeProvider>

<style lang="postcss">
  :global([hidden]) {
    display: none !important;
  }

  :global(.shiki) {
    background: theme('colors.neutral.50') !important;
  }

  :global(.shiki span) {
    background: transparent !important;
  }

  :global(.shiki code) {
    counter-reset: step;
    counter-increment: step 0;
  }

  :global(.shiki code .line::before) {
    content: counter(step);
    counter-increment: step;
    display: inline-block;
    width: 3ch;
    text-align: right;
    margin-right: theme('spacing.4');
    color: theme('colors.neutral.400');
  }

  :global(.dark .shiki span) {
    color: var(--shiki-dark) !important;
  }

  :global(.dark .shiki) {
    border: 1px solid theme('colors.neutral.800') !important;
    background: theme('colors.neutral.900') !important;
    color: theme('colors.neutral.200') !important;
  }

  :global(.dark .shiki code .line::before) {
    color: theme('colors.neutral.500');
  }
</style>
