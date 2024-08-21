<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateRadioGroupContextProps,
    CreateRadioGroupContextReturn,
  } from './context.svelte.js';

  export interface RadioGroupProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateRadioGroupContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateRadioGroupContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {
    createRadioGroupContext,
    setRadioGroupContext,
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
  }: RadioGroupProps = $props();

  let context = createRadioGroupContext({
    id: id ?? uuid(),
    ids,
    dir,
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

  setRadioGroupContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
