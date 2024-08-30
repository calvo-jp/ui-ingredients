<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface ComboboxLabelProps extends HTMLProps<'label'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {comboboxContext} from './context.svelte.js';

  let {asChild, children, ...props}: ComboboxLabelProps = $props();

  let combobox = comboboxContext.get();

  let mergedProps = $derived(mergeProps(props, combobox.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
