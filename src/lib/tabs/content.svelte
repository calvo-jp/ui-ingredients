<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {ContentProps} from '@zag-js/tabs';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface TabsContentProps extends Assign<SvelteHTMLElements['div'], ContentProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useTabsContext} from './context.svelte.js';

  let {value, children, ...props}: TabsContentProps = $props();

  let context = useTabsContext();

  let attrs = $derived(mergeProps(props, context.api.getContentProps({value})));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
