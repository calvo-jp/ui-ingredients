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
  import {setPresenceContext} from '$lib/presence/context.svelte.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setMenuContext} from './context.svelte.js';
  import {createMenu} from './create-menu.svelte.js';

  let {children, ...props}: MenuRootProps = $props();

  let [menuProps, presenceStrategyProps] = $derived(
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

  let menu = createMenu(reflect(() => menuProps));
  let presence = createPresence(
    reflect(() => ({
      ...presenceStrategyProps,
      present: menu.open,
    })),
  );

  setMenuContext(menu);
  setPresenceContext(presence);
</script>

{@render children?.(menu)}
