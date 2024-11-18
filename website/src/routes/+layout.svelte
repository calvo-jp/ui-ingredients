<script module>
  /* 🐞 FIXME: custom components not working */
  export * from '$lib/components';
</script>

<script>
  import '../app.css';

  import {Prose} from '$lib/ui';
  import Navbar from './navbar.svelte';
  import PageControl from './page-control.svelte';
  import Sidebar from './sidebar.svelte';
  import Toc from './toc.svelte';

  let {children} = $props();
</script>

<Navbar />

<div
  class="h-[calc(theme(height.dvh)-theme(spacing.16))] lg:flex lg:items-start lg:justify-center"
>
  <Sidebar />

  <main class="flex min-h-full flex-col p-5 md:p-8 lg:grow lg:p-16 xl:p-20">
    <div id="content" class="grow lg:mx-auto lg:max-w-screen-md">
      <Prose>
        {@render children()}
      </Prose>
    </div>

    <PageControl />
  </main>

  <Toc />
</div>
