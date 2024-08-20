<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface SliderLabelProps extends SvelteHtmlProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSliderContext} from './context.svelte.js';

  let {children, ...props}: SliderLabelProps = $props();

  let context = useSliderContext();

  let attrs = $derived(mergeProps(props, context.getLabelProps()));
</script>

<label {...attrs}>
  {@render children?.()}
</label>
