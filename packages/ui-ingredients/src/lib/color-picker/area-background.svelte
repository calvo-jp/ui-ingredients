<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ColorPickerAreaBackgroundProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {colorPickerAreaPropsContext, colorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerAreaBackgroundProps = $props();

  let colorPicker = colorPickerContext.get();
  let areaProps = colorPickerAreaPropsContext.get();

  let attrs = $derived(mergeProps(props, colorPicker.getAreaBackgroundProps(areaProps)));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
