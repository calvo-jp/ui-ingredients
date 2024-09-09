<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import {
    type CreateMenuProps,
    type CreateMenuReturn,
  } from './create-menu.svelte.js';

  export interface MenuRootProps extends CreateMenuProps {
    children?: Snippet<[CreateMenuReturn]>;
  }
</script>

<script lang="ts">
  import {setPresenceContext} from '$lib/presence/context.svelte.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {setMenuContext} from './context.svelte.js';
  import {createMenu} from './create-menu.svelte.js';

  let {children, ...props}: MenuRootProps = $props();

  let menu = createMenu(props);
  let presence = createPresence({
    get present() {
      return menu.open;
    },
  });

  setMenuContext(menu);
  setPresenceContext(presence);
</script>

{@render children?.(menu)}
