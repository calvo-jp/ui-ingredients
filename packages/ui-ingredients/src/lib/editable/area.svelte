<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface EditableAreaProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useEditableContext} from './context.svelte.js';

  let {children, ...props}: EditableAreaProps = $props();

  let context = useEditableContext();

  let attrs = $derived(mergeProps(props, context.getAreaProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
