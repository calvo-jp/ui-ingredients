<script lang="ts" module>
  import type {Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateRadioGroupProps, CreateRadioGroupReturn} from './create-radio-group.svelte.js';

  export interface RadioGroupProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateRadioGroupProps> {
    asChild?: Snippet<
      [attrs: Omit<GenericHtmlProps, 'children'>, radioGroup: CreateRadioGroupReturn]
    >;
    children?: Snippet<[radioGroup: CreateRadioGroupReturn]>;
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

  let attrs = $derived(mergeProps(props, radioGroup.getRootProps()));

  radioGroupContext.set(radioGroup);
</script>

{#if asChild}
  {@render asChild(attrs, radioGroup)}
{:else}
  <div {...attrs}>
    {@render children?.(radioGroup)}
  </div>
{/if}
