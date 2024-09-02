<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import {
    type CreateAvatarProps,
    type CreateAvatarReturn,
  } from './create-avatar.svelte.js';

  export interface AvatarProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateAvatarProps> {
    asChild?: AsChild<CreateAvatarReturn>;
    children?: Snippet<[CreateAvatarReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setAvatarContext} from './context.svelte.js';
  import {createAvatar} from './create-avatar.svelte.js';

  let {asChild, children, ...props}: AvatarProps = $props();

  let [avatarProps, otherProps] = $derived(
    createSplitProps<CreateAvatarProps>(['id', 'ids', 'onStatusChange'])(props),
  );

  let avatar = createAvatar(reflect(() => avatarProps));

  let mergedProps = $derived(mergeProps(otherProps, avatar.getRootProps()));

  setAvatarContext(avatar);
</script>

{#if asChild}
  {@render asChild(mergedProps, avatar)}
{:else}
  <div {...mergedProps}>
    {@render children?.(avatar)}
  </div>
{/if}
