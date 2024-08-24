<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface EditableAreaProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {editableContext} from './context.svelte.js';

  let {children, ...props}: EditableAreaProps = $props();

  let context = editableContext.get();

  let attrs = $derived(mergeProps(props, context.getAreaProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
