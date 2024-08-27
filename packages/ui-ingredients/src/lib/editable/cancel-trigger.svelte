<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface EditableCancelTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {editableContext} from './context.svelte.js';

  let {children, ...props}: EditableCancelTriggerProps = $props();

  let editable = editableContext.get();

  let attrs = $derived(mergeProps(props, editable.getCancelTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
