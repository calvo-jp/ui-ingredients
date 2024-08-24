<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateRatingGroupProps,
    CreateRatingGroupReturn,
  } from './create-rating-group.svelte.js';

  export interface RatingGroupProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateRatingGroupProps, 'id'>
    > {
    children?: Snippet<[api: CreateRatingGroupReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {getLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {ratingGroupContext} from './context.svelte.js';
  import {createRatingGroup} from './create-rating-group.svelte.js';

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

  let localeContext = getLocaleContext();
  let environmentContext = getEnvironmentContext();

  let uid = createUniqueId();

  let context = createRatingGroup({
    id: id ?? uid,
    ids,
    dir: dir ?? localeContext?.dir,
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
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  ratingGroupContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
