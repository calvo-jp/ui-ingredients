<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ColorPickerAreaThumbProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {colorPickerAreaPropsContext, colorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerAreaThumbProps = $props();

  let colorPicker = colorPickerContext.get();
  let areaProps = colorPickerAreaPropsContext.get();

  let attrs = $derived(mergeProps(props, colorPicker.getAreaThumbProps(areaProps)));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
