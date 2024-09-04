<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface RadioGroupIndicatorProps
    extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getRadioGroupContext} from './context.svelte.js';

  let {asChild, children, ...props}: RadioGroupIndicatorProps = $props();

  let radioGroup = getRadioGroupContext();

  let mergedProps = $derived(mergeProps(props, radioGroup.getIndicatorProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
