<script lang="ts">
  import '../app.css';

  import Navbar from './navbar.svelte';
  import Sidebar from './sidebar.svelte';
  import Toc from './toc.svelte';

  let {children} = $props();
</script>

<Navbar />

<main
  class="flex h-[calc(theme(height.dvh)-theme(spacing.16))] items-start justify-center"
>
  <Sidebar />

  <section class="shrink-0 grow p-24">
    <div class="mx-auto max-w-screen-md">
      {@render children()}
    </div>
  </section>

  <Toc />
</main>
