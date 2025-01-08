<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface FieldInputProps
    extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {getFieldContext} from './field-context.svelte.js';

  let {ref = $bindable(null), asChild, ...props}: FieldInputProps = $props();

  let field = getFieldContext();
  let mergedProps = $derived(mergeProps(field?.getInputProps() ?? {}, props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={ref} {...mergedProps} />
{/if}
