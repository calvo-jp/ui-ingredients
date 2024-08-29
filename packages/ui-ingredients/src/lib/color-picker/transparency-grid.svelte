<script lang="ts" module>
  import type {Assign, HTMLProps} from '$lib/types.js';
  import type {TransparencyGridProps} from '@zag-js/color-picker';

  export interface ColorPickerTransparencyGridProps
    extends Assign<HTMLProps<'div'>, TransparencyGridProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {colorPickerContext} from './context.svelte.js';

  let {size, children, ...props}: ColorPickerTransparencyGridProps = $props();

  let colorPicker = colorPickerContext.get();

  let attrs = $derived(
    mergeProps(
      props,
      colorPicker.getTransparencyGridProps({
        size,
      }),
    ),
  );
</script>

<div {...attrs}>
  {@render children?.()}
</div>
