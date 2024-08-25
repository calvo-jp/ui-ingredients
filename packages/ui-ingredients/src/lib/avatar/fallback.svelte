<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface AvatarFallbackProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {avatarContext} from './context.svelte.js';

  let {children, ...props}: AvatarFallbackProps = $props();

  let avatar = avatarContext.get();

  let attrs = $derived(mergeProps(props, avatar.getFallbackProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
