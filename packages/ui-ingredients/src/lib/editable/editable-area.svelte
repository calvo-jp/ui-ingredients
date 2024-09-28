<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface EditableAreaProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getEditableContext} from './editable-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: EditableAreaProps = $props();

  let editable = getEditableContext();

  let mergedProps = $derived(mergeProps(props, editable.getAreaProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
