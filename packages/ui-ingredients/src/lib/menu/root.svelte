<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import {
    type CreateMenuContextProps,
    type CreateMenuContextReturn,
  } from './context.svelte.js';

  export interface MenuRootProps extends Omit<CreateMenuContextProps, 'id'> {
    id?: string | null;
    children?: Snippet<[context: CreateMenuContextReturn]>;
  }
</script>

<script lang="ts">
  import {useEnvironmentContext} from '$lib/environment-provider/index.js';
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.js';
  import {createMenuContext, setMenuContext} from './context.svelte.js';

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
  let environmnetContext = useEnvironmentContext();

  let context = createMenuContext({
    id: id ?? createUniqueId(),
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

  setMenuContext(context);
</script>

{@render children?.(context)}
