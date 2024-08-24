<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import {type CreateMenuProps, type CreateMenuReturn} from './create-menu.svelte.js';

  export interface MenuRootProps extends Omit<CreateMenuProps, 'id'> {
    id?: string | null;
    children?: Snippet<[api: CreateMenuReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {menuContext} from './context.svelte.js';
  import {createMenu} from './create-menu.svelte.js';

  let {
    id,
    ids,
    dir,
    open,
    'open.controlled': openControlled,
    loopFocus,
    typeahead,
    composite,
    positioning,
    anchorPoint,
    closeOnSelect,
    'aria-label': ariaLabel,
    highlightedValue,
    onSelect,
    onOpenChange,
    onFocusOutside,
    onEscapeKeyDown,
    onHighlightChange,
    onInteractOutside,
    onPointerDownOutside,
    getRootNode,
    children,
  }: MenuRootProps = $props();

  let localeContext = useLocaleContext();
  let environmnetContext = getEnvironmentContext();

  let uid = createUniqueId();

  let context = createMenu({
    id: id ?? uid,
    ids,
    dir: dir ?? localeContext?.dir,
    open,
    'open.controlled': openControlled,
    loopFocus,
    typeahead,
    composite,
    positioning,
    anchorPoint,
    closeOnSelect,
    'aria-label': ariaLabel,
    highlightedValue,
    onSelect,
    onOpenChange,
    onFocusOutside,
    onEscapeKeyDown,
    onHighlightChange,
    onInteractOutside,
    onPointerDownOutside,
    getRootNode: getRootNode ?? environmnetContext?.getRootNode,
  });

  menuContext.set(context);
</script>

{@render children?.(context)}
