<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface EditableCancelTriggerProps
    extends HtmlIngredientProps<'button'> {}
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
