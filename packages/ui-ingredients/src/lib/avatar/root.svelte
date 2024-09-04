<script lang="ts" module>
  import type {Assign, IngredientProps} from '$lib/types.js';
  import {
    type CreateAvatarProps,
    type CreateAvatarReturn,
  } from './create-avatar.svelte.js';

  export interface AvatarProps
    extends Assign<
      IngredientProps<'div', CreateAvatarReturn>,
      CreateAvatarProps
    > {}
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
