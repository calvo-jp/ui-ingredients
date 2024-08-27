<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SliderLabelProps extends HtmlProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {sliderContext} from './context.svelte.js';

  let {children, ...props}: SliderLabelProps = $props();

  let slider = sliderContext.get();

  let attrs = $derived(mergeProps(props, slider.getLabelProps()));
</script>

<label {...attrs}>
  {@render children?.()}
</label>
