<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface AvatarImageProps
    extends HtmlIngredientProps<'img', HTMLImageElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getAvatarContext} from './avatar-context.svelte.js';

  let {this: e, asChild, ...props}: AvatarImageProps = $props();

  let avatar = getAvatarContext();

  let mergedProps = $derived(mergeProps(props, avatar.getImageProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <img bind:this={e} {...mergedProps} />
{/if}
