<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface EditableSubmitTriggerProps extends HtmlProps<'button'> {
    asChild?: AsChild<HtmlProps<'button'>>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {editableContext} from './context.svelte.js';

  let {asChild, children, ...props}: EditableSubmitTriggerProps = $props();

  let editable = editableContext.get();

  let attrs = $derived(mergeProps(props, editable.getSubmitTriggerProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
