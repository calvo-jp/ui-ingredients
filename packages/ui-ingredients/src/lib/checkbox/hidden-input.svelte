<script lang="ts" module>
  import type {IngredientProps} from '$lib/types.js';

  export interface CheckboxHiddenInputProps extends IngredientProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getCheckboxContext} from './context.svelte.js';

  let {asChild, ...props}: CheckboxHiddenInputProps = $props();

  let checkbox = getCheckboxContext();

  let mergedProps = $derived(mergeProps(props, checkbox.getHiddenInputProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input {...mergedProps} />
{/if}
