<script lang="ts">
  import '@fontsource/fira-code/400.css';
  import '@fontsource/inter/400.css';
  import '@fontsource/inter/500.css';
  import '@fontsource/inter/600.css';
  import '@fontsource/inter/700.css';
  import '../app.css';
  import Navbar from './navbar.svelte';
  import Sidebar from './sidebar.svelte';
  import Toc from './toc.svelte';

  let {children} = $props();
</script>

<Navbar />

<main>
  <Sidebar />

  <section>
    {@render children()}
  </section>

  <Toc />
</main>
