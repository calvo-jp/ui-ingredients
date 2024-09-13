<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ToastGhostBeforeProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getToastContext} from './context.svelte.js';

  let {this: e, asChild, children, ...props}: ToastGhostBeforeProps = $props();

  let context = getToastContext();

  let mergedProps = $derived(mergeProps(props, context.getGhostBeforeProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={e} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
