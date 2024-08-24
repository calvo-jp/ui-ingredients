<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SliderHiddenInputProps extends HtmlProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {sliderContext, sliderThumbPropsContext} from './context.svelte.js';

  let {...props}: SliderHiddenInputProps = $props();

  let context = sliderContext.get();

  let thumbProps = sliderThumbPropsContext.get();

  let attrs = $derived(mergeProps(props, context.getHiddenInputProps(thumbProps)));
</script>

<input {...attrs} />
