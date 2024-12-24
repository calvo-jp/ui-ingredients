<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface FieldLabelProps
    extends HtmlIngredientProps<'label', HTMLLabelElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getFieldContext} from './field-context.svelte.js';

  let {
    ref = $bindable(null),
    children,
    asChild,
    ...props
  }: FieldLabelProps = $props();

  let field = getFieldContext();

  let mergedProps = $derived(mergeProps(field?.getLabelProps() ?? {}, props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
