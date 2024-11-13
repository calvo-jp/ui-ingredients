<script lang="ts">
  import '../app.css';

  import Navbar from './navbar.svelte';
  import PageControl from './page-control.svelte';
  import Sidebar from './sidebar.svelte';
  import Toc from './toc.svelte';

  let {children} = $props();
</script>

<Navbar />

<main
  class="flex h-[calc(theme(height.dvh)-theme(spacing.16))] items-start justify-center"
>
  <Sidebar />

  <section
    class="flex min-h-full shrink-0 grow flex-col items-start px-20 pt-20"
  >
    <div id="content" class="mx-auto w-full max-w-screen-md grow">
      {@render children()}
    </div>

    <PageControl />
  </section>

  <Toc />
</main>
