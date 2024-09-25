<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface EditableLabelProps
    extends HtmlIngredientProps<'label', HTMLLabelElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getEditableContext} from './editable-context.svelte.js';

  let {this: e, asChild, children, ...props}: EditableLabelProps = $props();

  let editable = getEditableContext();

  let mergedProps = $derived(mergeProps(props, editable.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label bind:this={e} {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
