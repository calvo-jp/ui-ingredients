<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface RatingGroupHiddenInputProps
    extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getRatingGroupContext} from './rating-group-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    ...props
  }: RatingGroupHiddenInputProps = $props();

  let radioGroup = getRatingGroupContext();

  let mergedProps = $derived(
    mergeProps(radioGroup.getHiddenInputProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={ref} {...mergedProps} />
{/if}
