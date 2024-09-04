<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface RadioGroupItemTextProps
    extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getRadioGroupContext,
    getRadioGroupItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: RadioGroupItemTextProps = $props();

  let radioGroup = getRadioGroupContext();
  let itemProps = getRadioGroupItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, radioGroup.getItemTextProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
