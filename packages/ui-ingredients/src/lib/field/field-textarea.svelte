<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface FieldTextareaProps
    extends HtmlIngredientProps<'textarea', HTMLTextAreaElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getFieldContext} from './field-context.svelte.js';

  let {ref = $bindable(null), asChild, ...props}: FieldTextareaProps = $props();

  let field = getFieldContext();

  let mergedProps = $derived(mergeProps(props, field.getTextareaProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <textarea bind:this={ref} {...mergedProps}></textarea>
{/if}
