<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {getTableStylesContext} from './context.svelte';

  let {children, ...props}: SvelteHTMLElements['tr'] = $props();

  let recipe = getTableStylesContext();
</script>

<tr {...props} class={recipe.row(props)}>
  {@render children?.()}
</tr>
