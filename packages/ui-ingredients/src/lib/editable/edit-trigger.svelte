<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface EditableEditTriggerProps extends Assign<SvelteHTMLElements['button'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useEditableContext} from './context.svelte.js';

  let {children, ...props}: EditableEditTriggerProps = $props();

  let context = useEditableContext();

  let attrs = $derived(mergeProps(props, context.getEditTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
