<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '../types.js';
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
  import {mergeProps, reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
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
      'allowHalf',
      'autoFocus',
      'count',
      'disabled',
      'form',
      'id',
      'ids',
      'name',
      'onHoverChange',
      'onValueChange',
      'readOnly',
      'required',
      'translations',
      'value',
    ])(props),
  );

  let ratingGroup = createRatingGroup(reflect(() => createRatingGroupProps));
  let mergedProps = $derived(
    mergeProps(ratingGroup.getRootProps(), localProps),
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
