<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface EditableLabelProps extends HTMLProps<'label'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {editableContext} from './context.svelte.js';

  let {asChild, children, ...props}: EditableLabelProps = $props();

  let editable = editableContext.get();

  let mergedProps = $derived(mergeProps(props, editable.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
