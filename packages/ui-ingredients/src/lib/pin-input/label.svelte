<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface PinInputLabelProps extends HtmlIngredientProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPinInputContext} from './context.svelte.js';

  let {asChild, children, ...props}: PinInputLabelProps = $props();

  let pinInput = getPinInputContext();

  let mergedProps = $derived(mergeProps(props, pinInput.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
