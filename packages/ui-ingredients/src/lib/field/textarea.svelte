<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface FieldTextareaProps extends HtmlIngredientProps<'textarea'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getFieldContext} from './context.svelte.js';

  let {this: e, asChild, ...props}: FieldTextareaProps = $props();

  let field = getFieldContext();

  let mergedProps = $derived(mergeProps(props, field.getTextareaProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <textarea bind:this={e} {...mergedProps}></textarea>
{/if}
