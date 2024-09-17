<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateColorPickerProps,
    CreateColorPickerReturn,
  } from './create-color-picker.svelte.js';

  export interface ColorPickerProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateColorPickerReturn>,
      CreateColorPickerProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {setPresenceContext} from '$lib/presence/presence-context.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setColorPickerContext} from './color-picker-context.svelte.js';
  import {createColorPicker} from './create-color-picker.svelte.js';

  let {this: e, asChild, children, ...props}: ColorPickerProps = $props();

  let [colorPickerProps, localProps] = $derived(
    createSplitProps<CreateColorPickerProps>([
      'id',
      'ids',
      'open',
      'name',
      'value',
      'format',
      'disabled',
      'required',
      'readOnly',
      'defaultOpen',
      'positioning',
      'onOpenChange',
      'closeOnSelect',
      'initialFocusEl',
      'onValueChange',
      'onValueChangeEnd',
      'onFocusOutside',
      'onFormatChange',
      'onInteractOutside',
      'onPointerDownOutside',
    ])(props),
  );

  let colorPicker = createColorPicker(reflect(() => colorPickerProps));
  let presence = createPresence({
    get present() {
      return colorPicker.open;
    },
  });

  let mergedProps = $derived(
    mergeProps(localProps, colorPicker.getRootProps()),
  );

  setColorPickerContext(colorPicker);
  setPresenceContext(presence);
</script>

{#if asChild}
  {@render asChild(mergedProps, colorPicker)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.(colorPicker)}
  </div>
{/if}
