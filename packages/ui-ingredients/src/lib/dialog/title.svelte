<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DialogTitleProps extends HtmlIngredientProps<'h2'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getDialogContext} from './context.svelte.js';

  let {asChild, children, ...props}: DialogTitleProps = $props();

  let dialog = getDialogContext();

  let mergedProps = $derived(mergeProps(props, dialog.getTitleProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <h2 {...mergedProps}>
    {@render children?.()}
  </h2>
{/if}
