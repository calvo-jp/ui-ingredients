<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface EditableAreaProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {editableContext} from './context.svelte.js';

  let {children, ...props}: EditableAreaProps = $props();

  let editable = editableContext.get();

  let attrs = $derived(mergeProps(props, editable.getAreaProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
