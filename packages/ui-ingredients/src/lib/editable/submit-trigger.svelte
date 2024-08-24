<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface EditableSubmitTriggerProps extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {editableContext} from './context.svelte.js';

  let {children, ...props}: EditableSubmitTriggerProps = $props();

  let context = editableContext.get();

  let attrs = $derived(mergeProps(props, context.getSubmitTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
