<script lang="ts" context="module">
  import type {OptionalId} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateHoverCardContextProps,
    CreateHoverCardContextReturn,
  } from './context.svelte.js';

  export interface HoverCardProps extends OptionalId<CreateHoverCardContextProps> {
    children?: Snippet<[CreateHoverCardContextReturn]>;
  }
</script>

<script lang="ts">
  import {nanoid} from 'nanoid/non-secure';
  import {createHoverCardContext, setHoverCardContext} from './context.svelte.js';

  let {id = nanoid(), children, ...props}: HoverCardProps = $props();

  let context = createHoverCardContext({id, ...props});

  setHoverCardContext(context);
</script>

{@render children?.(context)}
