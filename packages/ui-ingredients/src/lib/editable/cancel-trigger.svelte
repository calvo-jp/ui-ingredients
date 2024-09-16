<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface EditableCancelTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getEditableContext} from './context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: EditableCancelTriggerProps = $props();

  let editable = getEditableContext();

  let mergedProps = $derived(
    mergeProps(props, editable.getCancelTriggerProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={e} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
