<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface EditableAreaProps extends HtmlProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {editableContext} from './context.svelte.js';

  let {asChild, children, ...props}: EditableAreaProps = $props();

  let editable = editableContext.get();

  let attrs = $derived(mergeProps(props, editable.getAreaProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
