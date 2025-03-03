<script lang="ts" module>
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import {
    type CreateAvatarProps,
    type CreateAvatarReturn,
  } from './create-avatar.svelte.js';

  export interface AvatarProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateAvatarReturn>,
      Optional<CreateAvatarProps, 'id'>
    > {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {setAvatarContext} from './avatar-context.svelte.js';
  import {createAvatar} from './create-avatar.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...rest
  }: AvatarProps = $props();

  let uid = $props.id();

  let [createAvatarProps, localProps] = $derived(
    createSplitProps<Omit<CreateAvatarProps, 'id'>>(['ids', 'onStatusChange'])(
      rest,
    ),
  );

  let avatar = createAvatar(
    reflect(() => ({...createAvatarProps, id: id ?? uid})),
  );

  let mergedProps = $derived(mergeProps(avatar.getRootProps(), localProps));

  setAvatarContext(avatar);
</script>

{#if asChild}
  {@render asChild(mergedProps, avatar)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(avatar)}
  </div>
{/if}
