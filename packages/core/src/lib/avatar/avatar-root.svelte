<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import {
    type CreateAvatarProps,
    type CreateAvatarReturn,
  } from './create-avatar.svelte.js';

  export interface AvatarProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateAvatarReturn>,
      CreateAvatarProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setAvatarContext} from './avatar-context.svelte.js';
  import {createAvatar} from './create-avatar.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: AvatarProps = $props();

  let [createAvatarProps, localProps] = $derived(
    createSplitProps<CreateAvatarProps>(['id', 'ids', 'onStatusChange'])(props),
  );

  let avatar = createAvatar(reflect(() => createAvatarProps));

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
