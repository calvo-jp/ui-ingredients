<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface EditablePreviewProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getEditableContext} from './context.svelte.js';

  let {this: e, asChild, children, ...props}: EditablePreviewProps = $props();

  let editable = getEditableContext();

  let mergedProps = $derived(mergeProps(props, editable.getPreviewProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {#if children}
      {@render children?.()}
    {:else}
      {editable.value}
    {/if}
  </div>
{/if}
