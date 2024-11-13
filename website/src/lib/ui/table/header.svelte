<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';

  let {children, ...props}: SvelteHTMLElements['thead'] = $props();
</script>

<thead {...props}>
  {@render children?.()}
</thead>
