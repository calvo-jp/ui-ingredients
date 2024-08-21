<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface EditableSubmitTriggerProps
    extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useEditableContext} from './context.svelte.js';

  let {children, ...props}: EditableSubmitTriggerProps = $props();

  let context = useEditableContext();

  let attrs = $derived(mergeProps(props, context.getSubmitTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
