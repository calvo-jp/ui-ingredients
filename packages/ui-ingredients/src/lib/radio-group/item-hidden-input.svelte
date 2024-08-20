<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface RadioGroupItemHiddenInputProps
    extends SvelteHtmlProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useRadioGroupContext,
    useRadioGroupItemContext,
  } from './context.svelte.js';

  let {...props}: RadioGroupItemHiddenInputProps = $props();

  let context = useRadioGroupContext();
  let itemContext = useRadioGroupItemContext();

  let attrs = $derived(
    mergeProps(props, context.getItemHiddenInputProps(itemContext)),
  );
</script>

<input {...attrs} />
