<script lang="ts" context="module">
  import type {HtmlIngredientsProps} from '$lib/types.js';

  export interface SwitchControlProps extends HtmlIngredientsProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSwitchContext} from './context.svelte.js';

  let {children, ...props}: SwitchControlProps = $props();

  let context = useSwitchContext();

  let attrs = $derived(mergeProps(props, context.getControlProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
