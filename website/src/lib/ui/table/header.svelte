<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {getTableStylesContext} from './context.svelte';

  let {children, ...props}: SvelteHTMLElements['thead'] = $props();

  let recipe = getTableStylesContext();
</script>

<thead {...props} class={recipe.header(props)}>
  {@render children?.()}
</thead>
