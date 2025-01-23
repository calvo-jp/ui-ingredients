<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface FieldRequiredIndicatorProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getFieldContext} from './field-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: FieldRequiredIndicatorProps = $props();

  let field = getFieldContext();
  let mergedProps = $derived(
    mergeProps(field?.getRequiredIndicatorProps() ?? {}, props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {#if children}
      {@render children?.()}
    {:else}
      *
    {/if}
  </span>
{/if}
