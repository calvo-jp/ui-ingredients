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

  import {page} from '$app/state';
  import {Prose} from '$lib/components';
  import {addCopyButtonToPreTags} from '$lib/patches';
  import {tick} from 'svelte';
  import {ThemeProvider} from 'svelte-os-themes';
  import Navbar from './navbar.svelte';
  import PageControl from './page-control.svelte';
  import Sidebar from './sidebar.svelte';
  import Toc from './toc.svelte';

  let {children} = $props();

  $effect(() => {
    page.url.pathname;

    tick().then(addCopyButtonToPreTags);
  });
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
        <Prose>
          {@render children()}
        </Prose>
      </section>

      <section class="mt-8">
        <PageControl />
      </section>
    </main>

    <Toc />
  </div>
</ThemeProvider>
