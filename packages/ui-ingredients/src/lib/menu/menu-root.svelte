<script lang="ts" module>
  import type {PresenceStrategyProps} from '$lib/presence/create-presence.svelte.js';
  import type {Snippet} from 'svelte';
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
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {setPresenceContext} from '$lib/presence/presence-context.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {createMenu} from './create-menu.svelte.js';
  import {
    getMenuContext,
    setMenuContext,
    setMenuTriggerItemContext,
  } from './menu-context.svelte.js';

  let {children, ...props}: MenuRootProps = $props();

  let [createMenuProps, presenceStrategyProps] = $derived(
    createSplitProps<CreateMenuProps>([
      'anchorPoint',
      'aria-label',
      'closeOnSelect',
      'composite',
      'defaultOpen',
      'highlightedValue',
      'id',
      'ids',
      'loopFocus',
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
