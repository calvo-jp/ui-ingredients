<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface PinInputClearTriggerProps
    extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {parts} from './anatomy.js';
  import {getPinInputContext} from './context.svelte.js';

  let {asChild, children, ...props}: PinInputClearTriggerProps = $props();

  let pinInput = getPinInputContext();

  let mergedProps = $derived(
    mergeProps(
      props,
      parts.clearTrigger.attrs,
      pinInput.getClearTriggerProps(),
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
