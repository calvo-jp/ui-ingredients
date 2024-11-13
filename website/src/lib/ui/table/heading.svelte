<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';

  let {children, ...props}: SvelteHTMLElements['th'] = $props();
</script>

<th {...props}>
  {@render children?.()}
</th>
