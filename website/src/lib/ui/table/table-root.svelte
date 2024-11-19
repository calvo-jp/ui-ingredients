<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';

  let {children, ...props}: SvelteHTMLElements['table'] = $props();
</script>

<table data-scope="table" data-part="root" {...props}>
  {@render children?.()}
</table>

<style lang="postcss">
  [data-scope='table'][data-part='root'] {
    @apply w-full;
  }

  [data-scope='table'][data-part='root'] :global(th),
  [data-scope='table'][data-part='root'] :global(td) {
    @apply border-x border-neutral-200 px-4 py-3 text-left text-sm first:border-l-0 last:border-r-0 dark:border-neutral-800;
  }

  [data-scope='table'][data-part='root'] :global(th) {
    @apply whitespace-nowrap bg-neutral-50 font-semibold dark:bg-neutral-800/25;
  }

  [data-scope='table'][data-part='root'] :global(tr) {
    @apply border-b border-neutral-200 dark:border-neutral-800;
  }

  [data-scope='table'][data-part='root'] :global(tbody tr:last-of-type) {
    @apply border-b-0;
  }

  [data-scope='table'][data-part='root'] :global(tbody tr:first-of-type) {
    @apply border-t-0;
  }

  [data-scope='table'][data-part='root'] :global(tfoot tr:last-of-type) {
    @apply border-b;
  }

  [data-scope='table'][data-part='root'] :global(tfoot tr:first-of-type) {
    @apply border-t;
  }
</style>
