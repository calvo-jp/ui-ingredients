<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SwitchHiddenInputProps
    extends HtmlIngredientProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getSwitchContext} from './context.svelte.js';

  let {asChild, ...props}: SwitchHiddenInputProps = $props();

  let switch$ = getSwitchContext();

  let mergedProps = $derived(mergeProps(props, switch$.getHiddenInputProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input {...mergedProps} />
{/if}
