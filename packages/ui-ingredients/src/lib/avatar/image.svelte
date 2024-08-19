<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface AvatarImageProps extends Assign<SvelteHTMLElements['img'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useAvatarContext} from './context.svelte.js';

  let {...props}: AvatarImageProps = $props();

  let context = useAvatarContext();

  let attrs = $derived(mergeProps(props, context.getImageProps()));
</script>

<img {...attrs} />
