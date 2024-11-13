<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {getTableStylesContext} from './table-context.svelte';

  let {children, ...props}: SvelteHTMLElements['th'] = $props();

  let recipe = getTableStylesContext();
</script>

<th {...props} class={recipe.heading(props)}>
  {@render children?.()}
</th>
