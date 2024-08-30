<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateRatingGroupProps,
    CreateRatingGroupReturn,
  } from './create-rating-group.svelte.js';

  export interface RatingGroupProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateRatingGroupProps> {
    asChild?: AsChild<CreateRatingGroupReturn>;
    children?: Snippet<[CreateRatingGroupReturn]>;
  }
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {ratingGroupContext} from './context.svelte.js';
  import {createRatingGroup} from './create-rating-group.svelte.js';

  let {asChild, children, ...props}: RatingGroupProps = $props();

  let [ratingGroupProps, otherProps] = $derived(
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

  let ratingGroup = createRatingGroup(ratingGroupProps);

  let mergedProps = $derived(
    mergeProps(otherProps, ratingGroup.getRootProps()),
  );

  ratingGroupContext.set(ratingGroup);
</script>

{#if asChild}
  {@render asChild(mergedProps, ratingGroup)}
{:else}
  <div {...mergedProps}>
    {@render children?.(ratingGroup)}
  </div>
{/if}
