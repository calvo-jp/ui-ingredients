<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface ToggleGroupItemProps extends Assign<SvelteHTMLElements['button'], ItemProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import type {ItemProps} from '@zag-js/toggle-group';
  import {useToggleGroupContext} from './context.svelte.js';

  let {value, disabled, children, ...props}: ToggleGroupItemProps = $props();

  let context = useToggleGroupContext();

  let attrs = $derived(mergeProps(props, context.getItemProps({value, disabled})));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
