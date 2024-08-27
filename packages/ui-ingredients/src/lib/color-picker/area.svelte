<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {AreaProps} from '@zag-js/color-picker';

  export interface ColorPickerAreaProps extends Assign<HtmlProps<'div'>, AreaProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {colorPickerAreaPropsContext, colorPickerContext} from './context.svelte.js';

  let {xChannel, yChannel, children, ...props}: ColorPickerAreaProps = $props();

  let colorPicker = colorPickerContext.get();
  let areaProps: AreaProps = $derived({
    xChannel,
    yChannel,
  });

  let attrs = $derived(mergeProps(props, colorPicker.getAreaProps(areaProps)));

  colorPickerAreaPropsContext.set(() => areaProps);
</script>

<div {...attrs}>
  {@render children?.()}
</div>
