<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface RadioGroupItemHiddenInputProps
    extends HtmlIngredientProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getRadioGroupContext,
    getRadioGroupItemPropsContext,
  } from './context.svelte.js';

  let {asChild, ...props}: RadioGroupItemHiddenInputProps = $props();

  let radioGroup = getRadioGroupContext();
  let itemProps = getRadioGroupItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, radioGroup.getItemHiddenInputProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input {...mergedProps} />
{/if}
