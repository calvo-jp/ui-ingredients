<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface AvatarImageProps extends HtmlIngredientProps<'img'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useAvatarContext} from './context.svelte.js';

  let {...props}: AvatarImageProps = $props();

  let context = useAvatarContext();

  let attrs = $derived(mergeProps(props, context.getImageProps()));
</script>

<img {...attrs} />
