<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface RadioGroupLabelProps extends SvelteHtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useRadioGroupContext} from './context.svelte.js';

  let {children, ...props}: RadioGroupLabelProps = $props();

  let context = useRadioGroupContext();

  let attrs = $derived(mergeProps(props, context.getLabelProps()));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
