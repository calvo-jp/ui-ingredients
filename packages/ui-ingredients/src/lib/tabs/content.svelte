<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {ContentProps} from '@zag-js/tabs';

  export interface TabsContentProps extends Assign<HtmlProps<'div'>, ContentProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {tabsContext} from './context.svelte.js';

  let {value, children, ...props}: TabsContentProps = $props();

  let tabs = tabsContext.get();

  let attrs = $derived(mergeProps(props, tabs.getContentProps({value})));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
