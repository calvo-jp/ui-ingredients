<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';
  import type {CreateToastReturn} from './create-toast.svelte.js';

  export interface ToastProps
    extends HtmlIngredientProps<'div', CreateToastReturn> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getToastContext} from './context.svelte.js';

  let {asChild, children, ...props}: ToastProps = $props();

  let toast = getToastContext();

  let mergedProps = $derived(mergeProps(props, toast.getRootProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps, toast)}
{:else}
  <div {...mergedProps}>
    <div {...toast.getGhostBeforeProps()}></div>
    {@render children?.(toast)}
    <div {...toast.getGhostAfterProps()}></div>
  </div>
{/if}
