<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface ComboboxItemGroupLabelProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {comboboxContext, comboboxItemGroupPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: ComboboxItemGroupLabelProps = $props();

  let combobox = comboboxContext.get();
  let itemGroupProps = comboboxItemGroupPropsContext.get();

  let mergedProps = $derived(
    mergeProps(
      props,
      combobox.getItemGroupLabelProps({
        htmlFor: itemGroupProps.id,
      }),
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
