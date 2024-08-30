<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface ComboboxItemGroupProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {createUniqueId, mergeProps} from '$lib/utils.svelte.js';
  import {
    comboboxContext,
    comboboxItemGroupPropsContext,
  } from './context.svelte.js';

  let {id, asChild, children, ...props}: ComboboxItemGroupProps = $props();

  let combobox = comboboxContext.get();

  let uid = createUniqueId();

  let comboboxItemGroupProps = $derived({
    id: id ?? uid,
  });

  let mergedProps = $derived(
    mergeProps(props, combobox.getItemGroupProps(comboboxItemGroupProps)),
  );

  comboboxItemGroupPropsContext.set(() => comboboxItemGroupProps);
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
