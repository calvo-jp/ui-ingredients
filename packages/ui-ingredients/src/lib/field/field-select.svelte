<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface FieldSelectProps
    extends HtmlIngredientProps<'select', HTMLSelectElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getFieldContext} from './field-context.svelte.js';

  let {
    ref = $bindable(null),
    children,
    asChild,
    ...props
  }: FieldSelectProps = $props();

  let field = getFieldContext();

  let mergedProps = $derived(mergeProps(props, field.getSelectProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <select bind:this={ref} {...mergedProps}>{@render children?.()}</select>
{/if}
