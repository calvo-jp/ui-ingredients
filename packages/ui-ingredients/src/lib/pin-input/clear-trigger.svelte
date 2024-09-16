<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface PinInputClearTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {parts} from './anatomy.js';
  import {getPinInputContext} from './context.svelte.js';

  let {
    this: e,
    asChild,
    children,
    ...props
  }: PinInputClearTriggerProps = $props();

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
  <button bind:this={e} type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
