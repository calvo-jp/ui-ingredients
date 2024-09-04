<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface FieldLabelProps extends HtmlIngredientProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getFieldContext} from './context.svelte.js';

  let {children, asChild, ...props}: FieldLabelProps = $props();

  let field = getFieldContext();

  let mergedProps = $derived(mergeProps(props, field.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
