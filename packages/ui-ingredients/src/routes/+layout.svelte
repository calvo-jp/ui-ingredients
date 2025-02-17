<script lang="ts">
  import '../app.css';

  import {
    EnvironmentProvider,
    LocaleProvider,
    Toast,
    Toaster,
  } from '$lib/index.js';
  import {toaster} from './shared/index.js';
  import Sidebar from './sidebar.svelte';

  let {children} = $props();
</script>

<EnvironmentProvider>
  <LocaleProvider locale="en-US">
    <div>
      <Sidebar />

      <main>
        {@render children()}
      </main>
    </div>

    <Toaster {toaster}>
      <Toast.Root>
        <Toast.Title />
        <Toast.Description />
        <Toast.CloseTrigger>Close</Toast.CloseTrigger>
      </Toast.Root>
    </Toaster>
  </LocaleProvider>
</EnvironmentProvider>

<style>
  :global([hidden]) {
    display: none !important;
  }
</style>
