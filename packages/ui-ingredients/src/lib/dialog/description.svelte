<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DialogDescriptionProps extends HtmlIngredientProps<'p'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getDialogContext} from './context.svelte.js';

  let {asChild, children, ...props}: DialogDescriptionProps = $props();

  let dialog = getDialogContext();

  let mergedProps = $derived(mergeProps(props, dialog.getDescriptionProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <p {...mergedProps}>
    {@render children?.()}
  </p>
{/if}
