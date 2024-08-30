<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface CheckboxControlProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {checkboxContext} from './context.svelte.js';

  let {asChild, children, ...props}: CheckboxControlProps = $props();

  let checkbox = checkboxContext.get();

  let mergedProps = $derived(mergeProps(props, checkbox.getControlProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
