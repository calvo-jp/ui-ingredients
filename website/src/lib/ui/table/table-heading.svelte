<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';

  let {children, ...props}: SvelteHTMLElements['th'] = $props();
</script>

<th data-scope="table" data-part="heading" {...props}>
  {@render children?.()}
</th>
