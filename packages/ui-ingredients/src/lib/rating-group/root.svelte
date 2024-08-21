<script lang="ts" context="module">
  import type {Assign, HtmlIngredientsProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateRatingGroupContextProps,
    CreateRatingGroupContextReturn,
  } from './context.svelte.js';

  export interface RatingGroupProps
    extends Assign<
      Omit<HtmlIngredientsProps<'div'>, 'children'>,
      Omit<CreateRatingGroupContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateRatingGroupContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {
    createRatingGroupContext,
    setRatingGroupContext,
  } from './context.svelte.js';

  let {
    id,
    ids,
    dir,
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
    getRootNode,
    children,
    ...props
  }: RatingGroupProps = $props();

  let context = createRatingGroupContext({
    id: id ?? uuid(),
    ids,
    dir,
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
    getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setRatingGroupContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
