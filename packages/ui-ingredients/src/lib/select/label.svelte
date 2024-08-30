<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface SelectLabelProps extends HTMLProps<'label'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {selectContext} from './context.svelte.js';

  let {asChild, children, ...props}: SelectLabelProps = $props();

  let select = selectContext.get();

  let mergedProps = $derived(mergeProps(props, select.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
