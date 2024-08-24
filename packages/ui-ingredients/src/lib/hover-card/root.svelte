<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {CreateHoverCardProps, CreateHoverCardReturn} from './create-hover-card.svelte.js';

  export interface HoverCardProps extends CreateHoverCardProps {
    children?: Snippet<[api: CreateHoverCardReturn]>;
  }
</script>

<script lang="ts">
  import {hoverCardContext} from './context.svelte.js';
  import {createHoverCard} from './create-hover-card.svelte.js';

  let {id, children, ...props}: HoverCardProps = $props();

  let context = createHoverCard({id, ...props});

  hoverCardContext.set(context);
</script>

{@render children?.(context)}
