<script lang="ts" context="module">
  import type {Assign, OptionalId} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {CreateSliderContextProps} from './context.svelte.js';

  export interface SliderProps
    extends Assign<SvelteHTMLElements['div'], OptionalId<CreateSliderContextProps>> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {nanoid} from 'nanoid/non-secure';
  import {createSliderContext, setSliderContext} from './context.svelte.js';

  let {
    id = nanoid(),
    ids,
    dir,
    max,
    min,
    step,
    form,
    name,
    value,
    origin,
    invalid,
    readOnly,
    disabled,
    orientation,
    thumbAlignment,
    thumbSize,
    minStepsBetweenThumbs,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    onFocusChange,
    onValueChange,
    onValueChangeEnd,
    getAriaValueText,
    getRootNode,
    children,
    ...props
  }: SliderProps = $props();

  let context = createSliderContext({
    id,
    ids,
    dir,
    max,
    min,
    step,
    form,
    name,
    value: $state.snapshot(value),
    origin,
    invalid,
    readOnly,
    disabled,
    orientation,
    thumbAlignment,
    thumbSize,
    minStepsBetweenThumbs,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    onFocusChange,
    onValueChange,
    onValueChangeEnd,
    getAriaValueText,
    getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.api.getRootProps()));

  setSliderContext(context);
</script>

<div {...attrs}>
  {@render children?.()}
</div>
