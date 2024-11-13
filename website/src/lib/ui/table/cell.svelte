<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';

  let {children, ...props}: SvelteHTMLElements['td'] = $props();
</script>

<td {...props}>
  {@render children?.()}
</td>
