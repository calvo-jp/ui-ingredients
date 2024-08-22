<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import {
    type CreateAvatarContextProps,
    type CreateAvatarContextReturn,
  } from './context.svelte.js';

  export interface AvatarProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateAvatarContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateAvatarContextReturn]>;
  }
</script>

<script lang="ts">
  import {useEnvironmentContext} from '$lib/environment-provider/index.js';
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createAvatarContext, setAvatarContext} from './context.svelte.js';

  let {
    id,
    ids,
    dir,
    getRootNode,
    onStatusChange,
    children,
    ...props
  }: AvatarProps = $props();

  let localeContext = useLocaleContext();
  let environmentContext = useEnvironmentContext();

  let context = createAvatarContext({
    id: id ?? createUniqueId(),
    ids,
    dir: dir ?? localeContext?.dir,
    onStatusChange,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setAvatarContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
