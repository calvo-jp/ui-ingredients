<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface EditableControlProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {editableContext} from './context.svelte.js';

  let {asChild, children, ...props}: EditableControlProps = $props();

  let editable = editableContext.get();

  let attrs = $derived(mergeProps(props, editable.getControlProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
