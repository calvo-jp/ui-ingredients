<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {CreatePopoverProps, CreatePopoverReturn} from './create-popover.svelte.js';

  export interface PopoverProps extends CreatePopoverProps {
    children?: Snippet<[api: CreatePopoverReturn]>;
  }
</script>

<script lang="ts">
  import {popoverContext} from './context.svelte.js';
  import {createPopover} from './create-popover.svelte.js';

  let {children, ...props}: PopoverProps = $props();

  let context = createPopover(props);

  popoverContext.set(context);
</script>

{@render children?.(context)}
