<script lang="ts" context="module">
  import type {HtmlIngredientsProps} from '$lib/types.js';

  export interface SwitchLabelProps extends HtmlIngredientsProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSwitchContext} from './context.svelte.js';

  let {children, ...props}: SwitchLabelProps = $props();

  let context = useSwitchContext();

  let attrs = $derived(mergeProps(props, context.getLabelProps()));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
