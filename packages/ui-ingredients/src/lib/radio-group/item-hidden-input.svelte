<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface RadioGroupItemHiddenInputProps extends Assign<SvelteHTMLElements['input'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useRadioGroupContext, useRadioGroupItemContext} from './context.svelte.js';

  let {...props}: RadioGroupItemHiddenInputProps = $props();

  let context = useRadioGroupContext();
  let itemContext = useRadioGroupItemContext();

  let attrs = $derived(mergeProps(props, context.getItemHiddenInputProps(itemContext)));
</script>

<input {...attrs} />
