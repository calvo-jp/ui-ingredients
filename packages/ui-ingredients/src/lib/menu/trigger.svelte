<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface MenuTriggerProps extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {menuContext} from './context.svelte.js';

  let {asChild, children, ...props}: MenuTriggerProps = $props();

  let menu = menuContext.get();

  let mergedProps = $derived(mergeProps(props, menu.getTriggerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
