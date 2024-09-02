<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface ColorPickerAreaBackgroundProps extends HTMLProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getColorPickerAreaPropsContext,
    getColorPickerContext,
  } from './context.svelte.js';

  let {children, ...props}: ColorPickerAreaBackgroundProps = $props();

  let colorPicker = getColorPickerContext();
  let areaProps = getColorPickerAreaPropsContext();

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getAreaBackgroundProps(areaProps)),
  );
</script>

<div {...mergedProps}>
  {@render children?.()}
</div>
