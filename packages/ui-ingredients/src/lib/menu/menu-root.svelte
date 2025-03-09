<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import type {Optional} from '../types.js';
  import {
    type CreateMenuProps,
    type CreateMenuReturn,
  } from './create-menu.svelte.js';

  export interface MenuRootProps
    extends Optional<CreateMenuProps, 'id'>,
      PresenceStrategyProps {
    children?: Snippet<[CreateMenuReturn]>;
  }
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {createPresence} from '../presence/create-presence.svelte.js';
  import {setPresenceContext} from '../presence/presence-context.svelte.js';
  import {createMenu} from './create-menu.svelte.js';
  import {
    getMenuContext,
    setMenuContext,
    setMenuTriggerItemContext,
  } from './menu-context.svelte.js';

  let {id, children, ...props}: MenuRootProps = $props();

  let uid = $props.id();

  let [createMenuProps, presenceStrategyProps] = $derived(
    createSplitProps<Omit<CreateMenuProps, 'id'>>([
      'anchorPoint',
      'aria-label',
      'closeOnSelect',
      'composite',
      'defaultHighlightedValue',
      'defaultOpen',
      'highlightedValue',
      'ids',
      'loopFocus',
      'navigate',
      'onEscapeKeyDown',
      'onFocusOutside',
      'onHighlightChange',
      'onInteractOutside',
      'onOpenChange',
      'onPointerDownOutside',
      'onSelect',
      'open',
      'positioning',
      'typeahead',
    ])(props),
  );

  let parentMenu = getMenuContext();

  let menu = createMenu(reflect(() => ({...createMenuProps, id: id ?? uid})));

  let presence = createPresence(
    reflect(() => ({
      ...presenceStrategyProps,
      present: menu.open,
    })),
  );

  setMenuContext(menu);
  setPresenceContext(presence);
  setMenuTriggerItemContext(() => parentMenu?.getTriggerItemProps(menu) ?? {});

  if (parentMenu) {
    parentMenu.setChild(menu.service);
    menu.setParent(parentMenu.service);
  }
</script>

{@render children?.(menu)}
