<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface RadioGroupItemTextProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    radioGroupContext,
    radioGroupItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: RadioGroupItemTextProps = $props();

  let radioGroup = radioGroupContext.get();
  let itemProps = radioGroupItemPropsContext.get();

  let mergedProps = $derived(
    mergeProps(props, radioGroup.getItemTextProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
