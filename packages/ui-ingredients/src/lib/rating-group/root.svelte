<script lang="ts" module>
  import type {Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateRatingGroupProps,
    CreateRatingGroupReturn,
  } from './create-rating-group.svelte.js';

  export interface RatingGroupProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateRatingGroupProps> {
    asChild?: Snippet<
      [attrs: Omit<GenericHtmlProps, 'children'>, ratingGroup: CreateRatingGroupReturn]
    >;
    children?: Snippet<[ratingGroup: CreateRatingGroupReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {ratingGroupContext} from './context.svelte.js';
  import {createRatingGroup} from './create-rating-group.svelte.js';

  let {
    id,
    ids,
    form,
    name,
    count,
    value,
    disabled,
    readOnly,
    required,
    autoFocus,
    allowHalf,
    translations,
    onHoverChange,
    onValueChange,
    asChild,
    children,
    ...props
  }: RatingGroupProps = $props();

  let ratingGroup = createRatingGroup({
    id,
    ids,
    form,
    name,
    count,
    value: $state.snapshot(value),
    disabled,
    readOnly,
    required,
    autoFocus,
    allowHalf,
    translations,
    onHoverChange,
    onValueChange,
  });

  let attrs = $derived(mergeProps(props, ratingGroup.getRootProps()));

  ratingGroupContext.set(ratingGroup);
</script>

{#if asChild}
  {@render asChild(attrs, ratingGroup)}
{:else}
  <div {...attrs}>
    {@render children?.(ratingGroup)}
  </div>
{/if}
