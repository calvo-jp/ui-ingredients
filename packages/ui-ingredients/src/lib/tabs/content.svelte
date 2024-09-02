<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ContentProps} from '@zag-js/tabs';

  export interface TabsContentProps
    extends Assign<HTMLProps<'div'>, ContentProps> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createSplitProps} from '@zag-js/utils';
  import {getTabsContext} from './context.svelte.js';

  let {asChild, children, ...props}: TabsContentProps = $props();

  let tabs = getTabsContext();

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
