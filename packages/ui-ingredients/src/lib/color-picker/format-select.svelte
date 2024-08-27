<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ColorPickerFormatSelectProps extends HtmlProps<'select'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {colorPickerContext} from './context.svelte.js';

  let {children, ...props}: ColorPickerFormatSelectProps = $props();

  let colorPicker = colorPickerContext.get();

  let attrs = $derived(mergeProps(props, colorPicker.getFormatSelectProps()));

  let formats = ['rgba', 'hsla', 'hsba'];
</script>

<select {...attrs}>
  {#if children}
    {@render children()}
  {:else}
    {#each formats as format}
      <option value={format}>{format}</option>
    {/each}
  {/if}
</select>
