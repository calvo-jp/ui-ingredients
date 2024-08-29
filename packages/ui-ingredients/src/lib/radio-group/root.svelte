<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateRadioGroupProps, CreateRadioGroupReturn} from './create-radio-group.svelte.js';

  export interface RadioGroupProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateRadioGroupProps> {
    asChild?: AsChild<CreateRadioGroupReturn>;
    children?: Snippet<[CreateRadioGroupReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
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
    asChild,
    children,
    ...props
  }: RadioGroupProps = $props();

  let radioGroup = createRadioGroup({
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

  let mergedProps = $derived(mergeProps(props, radioGroup.getRootProps()));

  radioGroupContext.set(radioGroup);
</script>

{#if asChild}
  {@render asChild(mergedProps, radioGroup)}
{:else}
  <div {...mergedProps}>
    {@render children?.(radioGroup)}
  </div>
{/if}
