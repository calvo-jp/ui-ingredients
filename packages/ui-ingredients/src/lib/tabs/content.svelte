<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ContentProps} from '@zag-js/tabs';

  export interface TabsContentProps
    extends Assign<HTMLProps<'div'>, ContentProps> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {tabsContext} from './context.svelte.js';

  let {asChild, children, ...props}: TabsContentProps = $props();

  let tabs = tabsContext.get();

  let [contentProps, otherProps] = $derived(
    createSplitProps<ContentProps>(['value'])(props),
  );

  let mergedProps = $derived(
    mergeProps(otherProps, tabs.getContentProps(contentProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
