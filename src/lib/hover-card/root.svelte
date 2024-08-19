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
  import {uuid} from '$lib/utils.svelte.js';
  import {createHoverCardContext, setHoverCardContext} from './context.svelte.js';

  let {id = uuid(), children, ...props}: HoverCardProps = $props();

  let context = createHoverCardContext({id, ...props});

  setHoverCardContext(context);
</script>

{@render children?.(context)}
