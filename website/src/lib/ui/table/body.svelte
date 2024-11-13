<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';

  let {children, ...props}: SvelteHTMLElements['tbody'] = $props();
</script>

<tbody {...props}>
  {@render children?.()}
</tbody>
