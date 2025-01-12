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
        id="markdown"
        class="grow lg:mx-auto lg:w-full lg:max-w-screen-md"
      >
        <div
          class={[
            'prose',
            'prose-neutral',
            'lg:prose-code:text-sm',
            'dark:prose-invert',
            'min-w-full',
            'prose-headings:font-lexend',
            'prose-a:underline-offset-2',

            'before:prose-p:content-none',
            'after:prose-p:content-none',
            'before:prose-code:content-none',
            'after:prose-code:content-none',

            '[&_.shiki]:dark:border',
            '[&_.shiki]:dark:border-neutral-800/40',
            '[&_.shiki]:!bg-neutral-50',
            '[&_.shiki_span]:!bg-transparent',
            '[&_.shiki]:dark:!bg-neutral-900/40',
            '[&_.shiki]:dark:!text-[var(--shiki-dark)]',
            '[&_.shiki_span]:dark:!text-[var(--shiki-dark)]',
          ]}
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
