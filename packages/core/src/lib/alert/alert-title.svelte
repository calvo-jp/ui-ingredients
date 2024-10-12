<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface AlertTitleProps
    extends HtmlIngredientProps<'h2', HTMLHeadingElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getAlertContext} from './alert-context.js';

  let {ref, asChild, children, ...props}: AlertTitleProps = $props();

  let alert = getAlertContext();

  let attrs = $derived(mergeProps(alert.getTitleProps(), props));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <h2 bind:this={ref} {...attrs}>
    {@render children?.()}
  </h2>
{/if}
