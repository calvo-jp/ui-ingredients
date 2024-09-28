<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateRatingGroupProps,
    CreateRatingGroupReturn,
  } from './create-rating-group.svelte.js';

  export interface RatingGroupProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateRatingGroupReturn>,
      CreateRatingGroupProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {createRatingGroup} from './create-rating-group.svelte.js';
  import {setRatingGroupContext} from './rating-group-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: RatingGroupProps = $props();

  let [createRatingGroupProps, localProps] = $derived(
    createSplitProps<CreateRatingGroupProps>([
      'id',
      'ids',
      'form',
      'name',
      'count',
      'value',
      'disabled',
      'readOnly',
      'required',
      'autoFocus',
      'allowHalf',
      'translations',
      'onHoverChange',
      'onValueChange',
    ])(props),
  );

  let ratingGroup = createRatingGroup(reflect(() => createRatingGroupProps));

  let mergedProps = $derived(
    mergeProps(localProps, ratingGroup.getRootProps()),
  );

  setRatingGroupContext(ratingGroup);
</script>

{#if asChild}
  {@render asChild(mergedProps, ratingGroup)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(ratingGroup)}
  </div>
{/if}
