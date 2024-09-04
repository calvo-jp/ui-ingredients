<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DialogContentProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getDialogContext} from './context.svelte.js';

  let {asChild, children, ...props}: DialogContentProps = $props();

  let dialog = getDialogContext();

  let mergedProps = $derived(mergeProps(props, dialog.getContentProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
