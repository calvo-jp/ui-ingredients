<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface SliderHiddenInputProps extends SvelteHtmlProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSliderContext, useSliderThumbContext} from './context.svelte.js';

  let {...props}: SliderHiddenInputProps = $props();

  let context = useSliderContext();
  let thumbContext = useSliderThumbContext();

  let attrs = $derived(
    mergeProps(props, context.getHiddenInputProps(thumbContext)),
  );
</script>

<input {...attrs} />
