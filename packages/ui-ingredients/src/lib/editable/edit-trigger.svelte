<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface EditableEditTriggerProps extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {editableContext} from './context.svelte.js';

  let {children, ...props}: EditableEditTriggerProps = $props();

  let context = editableContext.get();

  let attrs = $derived(mergeProps(props, context.getEditTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
