<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateSegmentGroupContextProps,
    CreateSegmentGroupContextReturn,
  } from './context.svelte.js';

  export interface SegmentGroupProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateSegmentGroupContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateSegmentGroupContextReturn]>;
  }
</script>

<script lang="ts">
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {
    createSegmentGroupContext,
    setSegmentGroupContext,
  } from './context.svelte.js';

  let {
    id,
    ids,
    dir,
    form,
    name,
    value,
    disabled,
    readOnly,
    orientation,
    onValueChange,
    getRootNode,
    children,
    ...props
  }: SegmentGroupProps = $props();

  let localeContext = useLocaleContext();

  let context = createSegmentGroupContext({
    id: id ?? uuid(),
    ids,
    dir: dir ?? localeContext?.dir,
    form,
    name,
    value: $state.snapshot(value),
    disabled,
    readOnly,
    orientation,
    onValueChange,
    getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setSegmentGroupContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
