<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface ColorPickerFormatSelectProps extends HTMLProps<'select'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {colorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerFormatSelectProps = $props();

  let colorPicker = colorPickerContext.get();

  let mergedProps = $derived(mergeProps(props, colorPicker.getFormatSelectProps()));

  let formats = ['rgba', 'hsla', 'hsba'];
</script>

<select {...mergedProps}>
  {#if children}
    {@render children()}
  {:else}
    {#each formats as format}
      <option value={format}>{format}</option>
    {/each}
  {/if}
</select>
