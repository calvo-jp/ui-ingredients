<script lang="ts" context="module">
  import type {Snippet} from 'svelte';
  import type {
    CreateHoverCardContextProps,
    CreateHoverCardContextReturn,
  } from './context.svelte.js';

  export interface HoverCardProps
    extends Omit<CreateHoverCardContextProps, 'id'> {
    id?: string | null;
    children?: Snippet<[CreateHoverCardContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {
    createHoverCardContext,
    setHoverCardContext,
  } from './context.svelte.js';

  let {id, children, ...props}: HoverCardProps = $props();

  let context = createHoverCardContext({
    id: id ?? uuid(),
    ...props,
  });

  setHoverCardContext(context);
</script>

{@render children?.(context)}
