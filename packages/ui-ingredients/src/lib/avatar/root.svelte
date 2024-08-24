<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import {type CreateAvatarProps, type CreateAvatarReturn} from './create-avatar.svelte.js';

  export interface AvatarProps
    extends Assign<Omit<HtmlIngredientProps<'div'>, 'children'>, Omit<CreateAvatarProps, 'id'>> {
    children?: Snippet<[api: CreateAvatarReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {getLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {avatarContext} from './context.svelte.js';
  import {createAvatar} from './create-avatar.svelte.js';

  let {id, ids, dir, getRootNode, onStatusChange, children, ...props}: AvatarProps = $props();

  let localeContext = getLocaleContext();
  let environmentContext = getEnvironmentContext();

  let uid = createUniqueId();

  let context = createAvatar({
    id: id ?? uid,
    ids,
    dir: dir ?? localeContext?.dir,
    onStatusChange,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  avatarContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
