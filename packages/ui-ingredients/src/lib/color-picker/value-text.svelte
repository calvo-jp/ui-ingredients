<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface ColorPickerValueTextProps extends HTMLProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {colorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerValueTextProps = $props();

  let colorPicker = colorPickerContext.get();

  let mergedProps = $derived(
    mergeProps(props, colorPicker.getValueTextProps()),
  );
</script>

<div {...mergedProps}>
  {#if children}
    {@render children()}
  {:else}
    {colorPicker.valueAsString}
  {/if}
</div>
