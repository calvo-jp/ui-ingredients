<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface AvatarImageProps extends HtmlProps<'img'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {avatarContext} from './context.svelte.js';

  let {...props}: AvatarImageProps = $props();

  let context = avatarContext.get();

  let attrs = $derived(mergeProps(props, context.getImageProps()));
</script>

<img {...attrs} />
