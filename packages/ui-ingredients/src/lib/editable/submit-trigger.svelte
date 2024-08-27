<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface EditableSubmitTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {editableContext} from './context.svelte.js';

  let {children, ...props}: EditableSubmitTriggerProps = $props();

  let editable = editableContext.get();

  let attrs = $derived(mergeProps(props, editable.getSubmitTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
