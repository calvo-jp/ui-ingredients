<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';

  let {children, ...props}: SvelteHTMLElements['thead'] = $props();
</script>

<thead data-scope="table" data-part="header" {...props}>
  {@render children?.()}
</thead>
