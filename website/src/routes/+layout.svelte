<script lang="ts">
  import '../app.css';

  import Navbar from './navbar.svelte';
  import Sidebar from './sidebar.svelte';
  import Toc from './toc.svelte';

  let {children} = $props();
</script>

<Navbar />

<main
  class="mx-auto flex h-[calc(theme(height.dvh)-theme(spacing.16))] max-w-screen-2xl items-start justify-center"
>
  <Sidebar />

  <section class="shrink-0 grow">
    {@render children()}
  </section>

  <Toc />
</main>
