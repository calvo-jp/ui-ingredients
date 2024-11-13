<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {getTableStylesContext} from './table-context.svelte';

  let {children, ...props}: SvelteHTMLElements['td'] = $props();

  let recipe = getTableStylesContext();
</script>

<td {...props} class={recipe.cell(props)}>
  {@render children?.()}
</td>
