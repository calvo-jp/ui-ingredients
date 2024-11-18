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
  class="flex h-[calc(theme(height.dvh)-theme(spacing.16))] items-start justify-center"
>
  <Sidebar />

  <main
    class="flex min-h-full grow flex-col items-start p-5 md:p-8 lg:p-16 xl:p-20"
  >
    <div id="content" class="mx-auto w-full max-w-screen-md grow">
      <Prose>
        {@render children()}
      </Prose>
    </div>

    <PageControl />
  </main>

  <Toc />
</div>
