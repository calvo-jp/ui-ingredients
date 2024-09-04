<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface PinInputHiddenInputProps
    extends HtmlIngredientProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPinInputContext} from './context.svelte.js';

  let {asChild, ...props}: PinInputHiddenInputProps = $props();

  let pinInput = getPinInputContext();

  let mergedProps = $derived(mergeProps(props, pinInput.getHiddenInputProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input {...mergedProps} />
{/if}
