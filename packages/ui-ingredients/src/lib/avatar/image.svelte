<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface AvatarImageProps extends HtmlProps<'img'> {
    asChild?: AsChild<HtmlProps<'img'>>;
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
