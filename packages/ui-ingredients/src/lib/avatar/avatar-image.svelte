<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface AvatarImageProps
    extends HtmlIngredientProps<'img', HTMLImageElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getAvatarContext} from './avatar-context.svelte.js';

  let {ref = $bindable(null), asChild, ...props}: AvatarImageProps = $props();

  let avatar = getAvatarContext();

  let mergedProps = $derived(mergeProps(avatar.getImageProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <img bind:this={ref} {...mergedProps} />
{/if}
