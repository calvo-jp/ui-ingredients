<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface ColorPickerAreaBackgroundProps extends HTMLProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {colorPickerAreaPropsContext, colorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerAreaBackgroundProps = $props();

  let colorPicker = colorPickerContext.get();
  let areaProps = colorPickerAreaPropsContext.get();

  let attrs = $derived(mergeProps(props, colorPicker.getAreaBackgroundProps(areaProps)));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
