<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface EditableInputProps extends HTMLProps<'input'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {getFieldContext} from '$lib/field/context.svelte.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {editableContext} from './context.svelte.js';

  let {asChild, ...props}: EditableInputProps = $props();

  let field = getFieldContext();
  let editable = editableContext.get();

  let mergedProps = $derived(mergeProps(props, editable.getInputProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input aria-describedby={field?.['aria-describedby']} {...mergedProps} />
{/if}
