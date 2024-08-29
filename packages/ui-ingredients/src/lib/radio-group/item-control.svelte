<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface RadioGroupItemControlProps extends HtmlProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {radioGroupContext, radioGroupItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: RadioGroupItemControlProps = $props();

  let radioGroup = radioGroupContext.get();
  let itemProps = radioGroupItemPropsContext.get();

  let attrs = $derived(mergeProps(props, radioGroup.getItemControlProps(itemProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
