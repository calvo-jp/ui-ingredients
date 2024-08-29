<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface CheckboxLabelProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {checkboxContext} from './context.svelte.js';

  let {asChild, children, ...props}: CheckboxLabelProps = $props();

  let checkbox = checkboxContext.get();

  let attrs = $derived(mergeProps(props, checkbox.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {@render children?.()}
  </span>
{/if}
