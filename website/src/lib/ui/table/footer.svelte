<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {getTableStylesContext} from './context.svelte';

  let {children, ...props}: SvelteHTMLElements['tfoot'] = $props();

  let recipe = getTableStylesContext();
</script>

<tfoot {...props} class={recipe.footer(props)}>
  {@render children?.()}
</tfoot>
