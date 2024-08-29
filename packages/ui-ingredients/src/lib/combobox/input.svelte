<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface ComboboxInputProps extends HTMLProps<'input'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {comboboxContext} from './context.svelte.js';

  let {asChild, ...props}: ComboboxInputProps = $props();

  let combobox = comboboxContext.get();

  let attrs = $derived(mergeProps(props, combobox.getInputProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <input {...attrs} />
{/if}
