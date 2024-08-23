<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import {
    type CreateMenuMachineProps,
    type CreateMenuMachineReturn,
  } from './context.svelte.js';

  export interface MenuRootProps extends Omit<CreateMenuMachineProps, 'id'> {
    id?: string | null;
    children?: Snippet<[context: CreateMenuMachineReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.js';
  import {createMenuMachine, setMenuContext} from './context.svelte.js';

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

  let context = createMenuMachine({
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

  setMenuContext(() => context);
</script>

{@render children?.(context)}
