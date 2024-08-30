<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ContentProps} from '@zag-js/tabs';

  export interface TabsContentProps
    extends Assign<HTMLProps<'div'>, ContentProps> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {tabsContext} from './context.svelte.js';

  let {value, asChild, children, ...props}: TabsContentProps = $props();

  let tabs = tabsContext.get();

  let mergedProps = $derived(mergeProps(props, tabs.getContentProps({value})));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
