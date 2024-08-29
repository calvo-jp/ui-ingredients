<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface CheckboxControlProps extends HtmlProps<'div'> {
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
