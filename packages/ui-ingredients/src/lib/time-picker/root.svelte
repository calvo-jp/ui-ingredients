<script lang="ts" module>
  import type {AsChild, Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateTimePickerProps, CreateTimePickerReturn} from './create-time-picker.svelte.js';

  export interface TimePickerProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, CreateTimePickerProps> {
    asChild?: AsChild<GenericHtmlProps, CreateTimePickerReturn>;
    children?: Snippet<[timePicker: CreateTimePickerReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {timePickerContext} from './context.svelte.js';
  import {createTimePicker} from './create-time-picker.svelte.js';

  let {
    id,
    ids,
    min,
    max,
    name,
    open,
    steps,
    value,
    locale,
    readOnly,
    disabled,
    defaultOpen,
    placeholder,
    positioning,
    allowSeconds,
    disableLayer,
    onOpenChange,
    onValueChange,
    onFocusChange,
    asChild,
    children,
    ...props
  }: TimePickerProps = $props();

  let timePicker = createTimePicker({
    id,
    ids,
    min,
    max,
    name,
    open,
    steps,
    value,
    locale,
    readOnly,
    disabled,
    defaultOpen,
    placeholder,
    positioning,
    allowSeconds,
    disableLayer,
    onOpenChange,
    onValueChange,
    onFocusChange,
  });

  let attrs = $derived(mergeProps(props, timePicker.getRootProps()));

  timePickerContext.set(timePicker);
</script>

{#if asChild}
  {@render asChild(attrs, timePicker)}
{:else}
  <div {...attrs}>
    {@render children?.(timePicker)}
  </div>
{/if}
