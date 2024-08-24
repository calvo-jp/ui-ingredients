<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SliderLabelProps extends HtmlIngredientProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {sliderContext} from './context.svelte.js';

  let {children, ...props}: SliderLabelProps = $props();

  let context = sliderContext.get();

  let attrs = $derived(mergeProps(props, context.getLabelProps()));
</script>

<label {...attrs}>
  {@render children?.()}
</label>
