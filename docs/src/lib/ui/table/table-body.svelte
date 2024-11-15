<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';

  let {children, ...props}: SvelteHTMLElements['tbody'] = $props();
</script>

<tbody data-scope="table" data-part="body" {...props}>
  {@render children?.()}
</tbody>
