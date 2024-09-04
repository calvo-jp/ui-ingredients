<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ComboboxPositionerProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getComboboxContext} from './context.svelte.js';

  let {asChild, children, ...props}: ComboboxPositionerProps = $props();

  let combobox = getComboboxContext();

  let mergedProps = $derived(mergeProps(props, combobox.getPositionerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
