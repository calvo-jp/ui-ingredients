<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface DialogTitleProps
    extends HtmlIngredientProps<'h2', HTMLHeadingElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getDialogContext} from './dialog-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: DialogTitleProps = $props();

  let dialog = getDialogContext();
  let mergedProps = $derived(mergeProps(dialog.getTitleProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <h2 bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </h2>
{/if}
