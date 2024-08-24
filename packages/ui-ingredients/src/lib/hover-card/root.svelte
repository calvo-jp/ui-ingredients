<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {CreateHoverCardProps, CreateHoverCardReturn} from './create-hover-card.svelte.js';

  export interface HoverCardProps extends Omit<CreateHoverCardProps, 'id'> {
    id?: string | null;
    children?: Snippet<[api: CreateHoverCardReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {getLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {hoverCardContext} from './context.svelte.js';
  import {createHoverCard} from './create-hover-card.svelte.js';

  let {id, dir, getRootNode, children, ...props}: HoverCardProps = $props();

  let localeContext = getLocaleContext();
  let environmentContext = getEnvironmentContext();

  let uid = createUniqueId();

  let context = createHoverCard({
    id: id ?? uid,
    dir: dir ?? localeContext?.dir,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
    ...props,
  });

  hoverCardContext.set(context);
</script>

{@render children?.(context)}
