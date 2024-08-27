<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ColorPickerValueTextProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {colorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerValueTextProps = $props();

  let colorPicker = colorPickerContext.get();

  let attrs = $derived(mergeProps(props, colorPicker.getValueTextProps()));
</script>

<div {...attrs}>
  {#if children}
    {@render children()}
  {:else}
    {colorPicker.valueAsString}
  {/if}
</div>
