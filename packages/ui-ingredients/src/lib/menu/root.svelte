<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import {type CreateMenuProps, type CreateMenuReturn} from './create-menu.svelte.js';

  export interface MenuRootProps extends CreateMenuProps {
    children?: Snippet<[api: CreateMenuReturn]>;
  }
</script>

<script lang="ts">
  import {menuContext} from './context.svelte.js';
  import {createMenu} from './create-menu.svelte.js';

  let {children, ...props}: MenuRootProps = $props();

  let context = createMenu(props);

  menuContext.set(context);
</script>

{@render children?.(context)}
