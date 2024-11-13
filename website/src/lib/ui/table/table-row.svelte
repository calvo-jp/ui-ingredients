<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';

  let {children, ...props}: SvelteHTMLElements['tr'] = $props();
</script>

<tr data-scope="table" data-part="row" {...props}>
  {@render children?.()}
</tr>
