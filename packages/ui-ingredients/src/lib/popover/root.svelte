<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {
    CreatePopoverProps,
    CreatePopoverReturn,
  } from './create-popover.svelte.js';

  export interface PopoverProps extends CreatePopoverProps {
    children?: Snippet<[CreatePopoverReturn]>;
  }
</script>

<script lang="ts">
  import {setPopoverContext} from './context.svelte.js';
  import {createPopover} from './create-popover.svelte.js';

  let {children, ...props}: PopoverProps = $props();

  let popover = createPopover(props);

  setPopoverContext(popover);
</script>

{@render children?.(popover)}
