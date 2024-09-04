<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ToastActionTriggerProps
    extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getToastContext} from './context.svelte.js';

  let {asChild, children, ...props}: ToastActionTriggerProps = $props();

  let context = getToastContext();

  let mergedProps = $derived(
    mergeProps(props, context.getActionTriggerProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button type="button" {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
