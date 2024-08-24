<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateRadioGroupProps, CreateRadioGroupReturn} from './create-radio-group.svelte.js';

  export interface RadioGroupProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateRadioGroupProps> {
    children?: Snippet<[api: CreateRadioGroupReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {radioGroupContext} from './context.svelte.js';
  import {createRadioGroup} from './create-radio-group.svelte.js';

  let {
    id,
    ids,
    form,
    name,
    value,
    disabled,
    readOnly,
    orientation,
    onValueChange,
    children,
    ...props
  }: RadioGroupProps = $props();

  let context = createRadioGroup({
    id,
    ids,
    form,
    name,
    value: $state.snapshot(value),
    disabled,
    readOnly,
    orientation,
    onValueChange,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  radioGroupContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
