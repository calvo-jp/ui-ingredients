<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface AvatarImageProps extends HtmlProps<'img'> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'img'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {avatarContext} from './context.svelte.js';

  let {asChild, ...props}: AvatarImageProps = $props();

  let avatar = avatarContext.get();

  let attrs = $derived(mergeProps(props, avatar.getImageProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <img {...attrs} />
{/if}
