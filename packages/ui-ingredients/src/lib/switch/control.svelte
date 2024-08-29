<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface SwitchControlProps extends HtmlProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {switchContext} from './context.svelte.js';

  let {asChild, children, ...props}: SwitchControlProps = $props();

  let switch$ = switchContext.get();

  let attrs = $derived(mergeProps(props, switch$.getControlProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
