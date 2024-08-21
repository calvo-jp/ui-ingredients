<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ContentProps} from '@zag-js/tabs';

  export interface TabsContentProps
    extends Assign<HtmlIngredientProps<'div'>, ContentProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useTabsContext} from './context.svelte.js';

  let {value, children, ...props}: TabsContentProps = $props();

  let context = useTabsContext();

  let attrs = $derived(mergeProps(props, context.getContentProps({value})));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
