<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateRatingGroupProps,
    CreateRatingGroupReturn,
  } from './create-rating-group.svelte.js';

  export interface RatingGroupProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateRatingGroupProps> {
    children?: Snippet<[radioGroup: CreateRatingGroupReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
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
    children,
    ...props
  }: RatingGroupProps = $props();

  let radioGroup = createRatingGroup({
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

  let attrs = $derived(mergeProps(props, radioGroup.getRootProps()));

  ratingGroupContext.set(radioGroup);
</script>

<div {...attrs}>
  {@render children?.(radioGroup)}
</div>
