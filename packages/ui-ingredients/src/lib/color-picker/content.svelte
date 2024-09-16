<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';
  import type {Action} from 'svelte/action';

  export interface ColorPickerContentProps
    extends HtmlIngredientProps<'div', HTMLDivElement, never, Action> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/context.svelte.js';
  import {getColorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerContentProps = $props();

  let colorPicker = getColorPickerContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(
      props,
      colorPicker.getContentProps(),
      presence.getPresenceProps(),
    ),
  );
</script>

<div use:presence.ref {...mergedProps}>
  {@render children?.()}
</div>
