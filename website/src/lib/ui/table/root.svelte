<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {setTableStylesContext} from './context.svelte';
  import {tableRecipe} from './recipe';

  let {children, ...props}: SvelteHTMLElements['table'] = $props();

  const recipe = tableRecipe();

  setTableStylesContext(recipe);
</script>

<table {...props} class={recipe.root(props)}>
  {@render children?.()}
</table>
