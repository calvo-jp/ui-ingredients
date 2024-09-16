<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface EditableInputProps
    extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getEditableContext} from './context.svelte.js';

  let {this: e, asChild, ...props}: EditableInputProps = $props();

  let editable = getEditableContext();

  let mergedProps = $derived(mergeProps(props, editable.getInputProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={e} {...mergedProps} />
{/if}
