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
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {uuid} from '$lib/utils.svelte.js';
  import {
    createHoverCardContext,
    setHoverCardContext,
  } from './context.svelte.js';

  let {id, dir, children, ...props}: HoverCardProps = $props();

  let localeContext = useLocaleContext();

  let context = createHoverCardContext({
    id: id ?? uuid(),
    dir: dir ?? localeContext?.dir,
    ...props,
  });

  setHoverCardContext(context);
</script>

{@render children?.(context)}
