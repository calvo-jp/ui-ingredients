<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TimePickerInputProps extends HtmlIngredientProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTimePickerContext} from './context.svelte.js';

  let {asChild, ...props}: TimePickerInputProps = $props();

  let timePicker = getTimePickerContext();

  let mergedProps = $derived(mergeProps(props, timePicker.getInputProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input {...mergedProps} />
{/if}
