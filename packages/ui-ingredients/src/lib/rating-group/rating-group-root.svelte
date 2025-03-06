<script lang="ts" module>
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateRatingGroupProps,
    CreateRatingGroupReturn,
  } from './create-rating-group.svelte.js';

  export interface RatingGroupProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateRatingGroupReturn>,
      Optional<CreateRatingGroupProps, 'id'>
    > {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {createRatingGroup} from './create-rating-group.svelte.js';
  import {setRatingGroupContext} from './rating-group-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: RatingGroupProps = $props();

  let uid = $props.id();

  let [createRatingGroupProps, localProps] = $derived(
    createSplitProps<Omit<CreateRatingGroupProps, 'id'>>([
      'allowHalf',
      'autoFocus',
      'count',
      'defaultValue',
      'disabled',
      'form',
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

  let ratingGroup = createRatingGroup(
    reflect(() => ({...createRatingGroupProps, id: id ?? uid})),
  );

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
