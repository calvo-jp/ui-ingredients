<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface CheckboxHiddenInputProps
    extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getCheckboxContext} from './checkbox-context.svelte.js';

  let {this: e, asChild, ...props}: CheckboxHiddenInputProps = $props();

  let checkbox = getCheckboxContext();

  let mergedProps = $derived(mergeProps(props, checkbox.getHiddenInputProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={e} {...mergedProps} />
{/if}
