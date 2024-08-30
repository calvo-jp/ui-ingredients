<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface ComboboxClearTriggerProps extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {comboboxContext} from './context.svelte.js';

  let {asChild, children, ...props}: ComboboxClearTriggerProps = $props();

  let combobox = comboboxContext.get();

  let mergedProps = $derived(
    mergeProps(props, combobox.getClearTriggerProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
