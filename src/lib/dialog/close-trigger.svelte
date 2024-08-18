<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface DialogCloseTriggerProps extends Assign<SvelteHTMLElements['button'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useDialogContext} from './context.svelte.js';

  let {children, ...props}: DialogCloseTriggerProps = $props();

  let context = useDialogContext();

  let attrs = $derived(mergeProps(props, context.api.getCloseTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
