<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ColorPickerContentProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/context.svelte.js';
  import {getColorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerContentProps = $props();

  let colorPicker = getColorPickerContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getContentProps(), presence.getRootProps()),
  );
</script>

<div {...mergedProps}>
  {@render children?.()}
</div>
