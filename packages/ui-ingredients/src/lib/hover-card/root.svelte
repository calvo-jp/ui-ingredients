<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {
    CreateHoverCardContextProps,
    CreateHoverCardContextReturn,
  } from './context.svelte.js';

  export interface HoverCardProps extends Omit<CreateHoverCardContextProps, 'id'> {
    id?: string | null;
    children?: Snippet<[CreateHoverCardContextReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {getLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {createHoverCardContext, setHoverCardContext} from './context.svelte.js';

  let {id, dir, getRootNode, children, ...props}: HoverCardProps = $props();

  let localeContext = getLocaleContext();
  let environmentContext = getEnvironmentContext();

  let context = createHoverCardContext({
    id: id ?? createUniqueId(),
    dir: dir ?? localeContext?.dir,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
    ...props,
  });

  setHoverCardContext(context);
</script>

{@render children?.(context)}
