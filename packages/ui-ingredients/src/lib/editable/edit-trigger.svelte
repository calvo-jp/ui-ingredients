<script lang="ts" context="module">
  import type {HtmlIngredientsProps} from '$lib/types.js';

  export interface EditableEditTriggerProps
    extends HtmlIngredientsProps<'button'> {}
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
