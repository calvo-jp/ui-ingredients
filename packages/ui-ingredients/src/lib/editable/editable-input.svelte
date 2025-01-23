<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface EditableInputProps
    extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getEditableContext} from './editable-context.svelte.js';

  let {ref = $bindable(null), asChild, ...props}: EditableInputProps = $props();

  let editable = getEditableContext();
  let mergedProps = $derived(mergeProps(editable.getInputProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={ref} {...mergedProps} />
{/if}
