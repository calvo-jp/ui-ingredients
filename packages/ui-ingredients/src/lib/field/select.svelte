<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface FieldSelectProps
    extends HtmlIngredientProps<'select', HTMLSelectElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getFieldContext} from './context.svelte.js';

  let {this: e, children, asChild, ...props}: FieldSelectProps = $props();

  let field = getFieldContext();

  let mergedProps = $derived(mergeProps(props, field.getSelectProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <select bind:this={e} {...mergedProps}>{@render children?.()}</select>
{/if}
