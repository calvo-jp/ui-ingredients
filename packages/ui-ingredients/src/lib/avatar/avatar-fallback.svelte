<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface AvatarFallbackProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getAvatarContext} from './avatar-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: AvatarFallbackProps = $props();

  let avatar = getAvatarContext();
  let mergedProps = $derived(mergeProps(avatar.getFallbackProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
