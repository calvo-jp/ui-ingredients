<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface EditableCancelTriggerProps extends HTMLProps<'button'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {editableContext} from './context.svelte.js';

  let {asChild, children, ...props}: EditableCancelTriggerProps = $props();

  let editable = editableContext.get();

  let attrs = $derived(mergeProps(props, editable.getCancelTriggerProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
