<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface SliderHiddenInputProps extends HTMLProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {sliderContext, sliderThumbPropsContext} from './context.svelte.js';

  let {...props}: SliderHiddenInputProps = $props();

  let slider = sliderContext.get();
  let thumbProps = sliderThumbPropsContext.get();

  let mergedProps = $derived(
    mergeProps(props, slider.getHiddenInputProps(thumbProps)),
  );
</script>

<input {...mergedProps} />
