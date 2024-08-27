<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ColorPickerPositionerProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {colorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerPositionerProps = $props();

  let colorPicker = colorPickerContext.get();

  let attrs = $derived(mergeProps(props, colorPicker.getPositionerProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
