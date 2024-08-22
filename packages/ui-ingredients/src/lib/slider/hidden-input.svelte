<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SliderHiddenInputProps
    extends HtmlIngredientProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useSliderContext,
    useSliderThumbPropsContext,
  } from './context.svelte.js';

  let {...props}: SliderHiddenInputProps = $props();

  let context = useSliderContext();

  let thumbProps = useSliderThumbPropsContext();

  let attrs = $derived(
    mergeProps(props, context.getHiddenInputProps(thumbProps)),
  );
</script>

<input {...attrs} />
