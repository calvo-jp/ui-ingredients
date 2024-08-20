<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface AvatarImageProps extends SvelteHtmlProps<'img'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useAvatarContext} from './context.svelte.js';

  let {...props}: AvatarImageProps = $props();

  let context = useAvatarContext();

  let attrs = $derived(mergeProps(props, context.getImageProps()));
</script>

<img {...attrs} />
