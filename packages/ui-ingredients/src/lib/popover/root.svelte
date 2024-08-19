<script lang="ts" context="module">
  import type {OptionalId} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreatePopoverContextProps, CreatePopoverContextReturn} from './context.svelte.js';

  export interface PopoverProps extends OptionalId<CreatePopoverContextProps> {
    children?: Snippet<[CreatePopoverContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {createPopoverContext, setPopoverContext} from './context.svelte.js';

  let {id = uuid(), children, ...props}: PopoverProps = $props();

  let context = createPopoverContext({id, ...props});

  setPopoverContext(context);
</script>

{@render children?.(context)}
