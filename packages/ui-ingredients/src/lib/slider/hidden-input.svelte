<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface SliderHiddenInputProps extends HTMLProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getSliderContext,
    getSliderThumbPropsContext,
  } from './context.svelte.js';

  let {...props}: SliderHiddenInputProps = $props();

  let slider = getSliderContext();
  let thumbProps = getSliderThumbPropsContext();

  let mergedProps = $derived(
    mergeProps(props, slider.getHiddenInputProps(thumbProps)),
  );
</script>

<input {...mergedProps} />
