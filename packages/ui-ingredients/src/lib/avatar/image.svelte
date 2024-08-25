<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface AvatarImageProps extends HtmlProps<'img'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {avatarContext} from './context.svelte.js';

  let {...props}: AvatarImageProps = $props();

  let avatar = avatarContext.get();

  let attrs = $derived(mergeProps(props, avatar.getImageProps()));
</script>

<img {...attrs} />
