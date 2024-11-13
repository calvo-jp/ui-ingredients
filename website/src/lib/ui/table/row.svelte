<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';

  let {children, ...props}: SvelteHTMLElements['tr'] = $props();
</script>

<tr {...props}>
  {@render children?.()}
</tr>
