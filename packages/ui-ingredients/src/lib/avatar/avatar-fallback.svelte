<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface AvatarFallbackProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getAvatarContext} from './avatar-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: AvatarFallbackProps = $props();

  let avatar = getAvatarContext();

  let mergedProps = $derived(mergeProps(props, avatar.getFallbackProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
