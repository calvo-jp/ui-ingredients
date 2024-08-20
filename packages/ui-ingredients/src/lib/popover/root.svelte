<script lang="ts" context="module">
  import type {Snippet} from 'svelte';
  import type {
    CreatePopoverContextProps,
    CreatePopoverContextReturn,
  } from './context.svelte.js';

  export interface PopoverProps extends Omit<CreatePopoverContextProps, 'id'> {
    id?: string | null;
    children?: Snippet<[CreatePopoverContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {createPopoverContext, setPopoverContext} from './context.svelte.js';

  let {id, children, ...props}: PopoverProps = $props();

  let context = createPopoverContext({
    id: id ?? uuid(),
    ...props,
  });

  setPopoverContext(context);
</script>

{@render children?.(context)}
