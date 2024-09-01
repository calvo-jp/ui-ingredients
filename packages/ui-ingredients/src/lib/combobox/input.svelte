<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface ComboboxInputProps extends HTMLProps<'input'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {getFieldContext} from '$lib/field/context.svelte.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {comboboxContext} from './context.svelte.js';

  let {asChild, ...props}: ComboboxInputProps = $props();

  let field = getFieldContext();
  let combobox = comboboxContext.get();

  let mergedProps = $derived(mergeProps(props, combobox.getInputProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input aria-describedby={field?.['aria-describedby']} {...mergedProps} />
{/if}
