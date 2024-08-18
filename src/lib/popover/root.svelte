<script lang="ts" context="module">
  import type {OptionalId} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreatePopoverContextProps} from './context.svelte.js';

  export interface PopoverProps extends OptionalId<CreatePopoverContextProps> {
    children?: Snippet;
  }
</script>

<script lang="ts">
  import {nanoid} from 'nanoid/non-secure';
  import {createPopoverContext, setPopoverContext} from './context.svelte.js';

  let {id = nanoid(), children, ...props}: PopoverProps = $props();

  let context = createPopoverContext({id, ...props});

  setPopoverContext(context);
</script>

{@render children?.()}
