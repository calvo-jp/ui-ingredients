<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {getTableStylesContext} from './context.svelte';

  let {children, ...props}: SvelteHTMLElements['tbody'] = $props();

  let recipe = getTableStylesContext();
</script>

<tbody {...props} class={recipe.body(props)}>
  {@render children?.()}
</tbody>
