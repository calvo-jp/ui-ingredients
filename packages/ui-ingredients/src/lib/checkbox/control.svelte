<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface CheckboxControlProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {checkboxContext} from './context.svelte.js';

  let {asChild, children, ...props}: CheckboxControlProps = $props();

  let checkbox = checkboxContext.get();

  let attrs = $derived(mergeProps(props, checkbox.getControlProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
