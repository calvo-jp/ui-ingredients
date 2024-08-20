<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface EditableCancelTriggerProps extends Assign<SvelteHTMLElements['button'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useEditableContext} from './context.svelte.js';

  let {children, ...props}: EditableCancelTriggerProps = $props();

  let context = useEditableContext();

  let attrs = $derived(mergeProps(props, context.getCancelTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
