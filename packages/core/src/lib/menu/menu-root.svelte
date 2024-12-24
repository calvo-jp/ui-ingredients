<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import {
    type CreateMenuProps,
    type CreateMenuReturn,
  } from './create-menu.svelte.js';

  export interface MenuRootProps
    extends CreateMenuProps,
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

  let {children, ...props}: MenuRootProps = $props();

  let [createMenuProps, presenceStrategyProps] = $derived(
    createSplitProps<CreateMenuProps>([
      'id',
      'ids',
      'open',
      'openControlled',
      'loopFocus',
      'composite',
      'typeahead',
      'positioning',
      'anchorPoint',
      'closeOnSelect',
      'highlightedValue',
      'aria-label',
      'onSelect',
      'onOpenChange',
      'onFocusOutside',
      'onEscapeKeyDown',
      'onHighlightChange',
      'onInteractOutside',
      'onPointerDownOutside',
    ])(props),
  );

  let parentMenu = getMenuContext();
  let menu = createMenu(reflect(() => createMenuProps));

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
    parentMenu.setChild(menu.machine);
    menu.setParent(parentMenu.machine);
  }
</script>

{@render children?.(menu)}
