<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface SelectTriggerProps extends SvelteHtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSelectContext} from './context.svelte.js';

  let {children, ...props}: SelectTriggerProps = $props();

  let context = useSelectContext();

  let attrs = $derived(mergeProps(props, context.getTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
