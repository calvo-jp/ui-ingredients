<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import {type CreateAvatarProps, type CreateAvatarReturn} from './create-avatar.svelte.js';

  export interface AvatarProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateAvatarProps> {
    asChild?: AsChild<CreateAvatarReturn>;
    children?: Snippet<[CreateAvatarReturn]>;
  }
</script>

<script lang="ts">
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {avatarContext} from './context.svelte.js';
  import {createAvatar} from './create-avatar.svelte.js';

  let {asChild, children, ...props}: AvatarProps = $props();

  let [avatarProps, otherProps] = $derived(
    createSplitProps<CreateAvatarProps>(['id', 'ids', 'onStatusChange'])(props),
  );

  let avatar = createAvatar(avatarProps);

  let mergedProps = $derived(mergeProps(otherProps, avatar.getRootProps()));

  avatarContext.set(avatar);
</script>

{#if asChild}
  {@render asChild(mergedProps, avatar)}
{:else}
  <div {...mergedProps}>
    {@render children?.(avatar)}
  </div>
{/if}
