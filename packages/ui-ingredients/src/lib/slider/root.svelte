<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateSliderContextProps,
    CreateSliderContextReturn,
  } from './context.svelte.js';

  export interface SliderProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateSliderContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateSliderContextReturn]>;
  }
</script>

<script lang="ts">
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createSliderContext, setSliderContext} from './context.svelte.js';

  let {
    id,
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

  let localeContext = useLocaleContext();

  let context = createSliderContext({
    id: id ?? uuid(),
    ids,
    dir: dir ?? localeContext?.dir,
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

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setSliderContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
