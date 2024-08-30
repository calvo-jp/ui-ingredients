<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {
    CreateHoverCardProps,
    CreateHoverCardReturn,
  } from './create-hover-card.svelte.js';

  export interface HoverCardProps extends CreateHoverCardProps {
    children?: Snippet<[hoverCard: CreateHoverCardReturn]>;
  }
</script>

<script lang="ts">
  import {hoverCardContext} from './context.svelte.js';
  import {createHoverCard} from './create-hover-card.svelte.js';

  let {children, ...props}: HoverCardProps = $props();

  let hoverCard = createHoverCard(props);

  hoverCardContext.set(hoverCard);
</script>

{@render children?.(hoverCard)}
