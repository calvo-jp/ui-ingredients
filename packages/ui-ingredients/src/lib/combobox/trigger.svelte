<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface ComboboxTriggerProps extends SvelteHtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useComboboxContext} from './context.svelte.js';

  let {children, ...props}: ComboboxTriggerProps = $props();

  let context = useComboboxContext();

  let attrs = $derived(mergeProps(props, context.getTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
