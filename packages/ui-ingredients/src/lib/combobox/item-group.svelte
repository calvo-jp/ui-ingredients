<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface ComboboxItemGroupProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {uid} from 'uid';
  import {
    comboboxContext,
    comboboxItemGroupPropsContext,
  } from './context.svelte.js';

  let {id, asChild, children, ...props}: ComboboxItemGroupProps = $props();

  let combobox = comboboxContext.get();

  let id_ = uid();

  let comboboxItemGroupProps = $derived({
    id: id ?? id_,
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
