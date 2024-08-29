<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface PinInputClearTriggerProps extends HtmlProps<'button'> {
    asChild?: AsChild<HtmlProps<'button'>>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {parts} from './anatomy.js';
  import {pinInputContext} from './context.svelte.js';

  let {asChild, children, onclick, ...props}: PinInputClearTriggerProps = $props();

  let pinInput = pinInputContext.get();

  let attrs = $derived(
    mergeProps(props, parts.clearTrigger.attrs, pinInput.getClearTriggerProps()),
  );
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
