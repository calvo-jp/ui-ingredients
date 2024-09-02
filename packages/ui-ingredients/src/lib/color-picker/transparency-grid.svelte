<script lang="ts" module>
  import type {Assign, HTMLProps} from '$lib/types.js';
  import type {TransparencyGridProps} from '@zag-js/color-picker';

  export interface ColorPickerTransparencyGridProps
    extends Assign<HTMLProps<'div'>, TransparencyGridProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getColorPickerContext} from './context.svelte.js';

  let {size, children, ...props}: ColorPickerTransparencyGridProps = $props();

  let colorPicker = getColorPickerContext();

  let mergedProps = $derived(
    mergeProps(
      props,
      colorPicker.getTransparencyGridProps({
        size,
      }),
    ),
  );
</script>

<div {...mergedProps}>
  {@render children?.()}
</div>
