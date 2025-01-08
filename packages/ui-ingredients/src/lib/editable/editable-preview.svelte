<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface EditablePreviewProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getEditableContext} from './editable-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: EditablePreviewProps = $props();

  let editable = getEditableContext();
  let mergedProps = $derived(mergeProps(editable.getPreviewProps(), props));
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
