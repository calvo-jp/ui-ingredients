<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface EditablePreviewProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {editableContext} from './context.svelte.js';

  let {asChild, children, ...props}: EditablePreviewProps = $props();

  let editable = editableContext.get();

  let attrs = $derived(mergeProps(props, editable.getPreviewProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {#if children}
      {@render children?.()}
    {:else}
      {editable.value}
    {/if}
  </div>
{/if}
