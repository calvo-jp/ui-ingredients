<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface ComboboxListProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {comboboxContext} from './context.svelte.js';

  let {asChild, children, ...props}: ComboboxListProps = $props();

  let combobox = comboboxContext.get();

  let mergedProps = $derived(mergeProps(props, combobox.getListProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
