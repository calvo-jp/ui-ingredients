<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface EditablePreviewProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getEditableContext} from './editable-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: EditablePreviewProps = $props();

  let editable = getEditableContext();

  let mergedProps = $derived(mergeProps(props, editable.getPreviewProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {#if children}
      {@render children?.()}
    {:else}
      {editable.value}
    {/if}
  </span>
{/if}
