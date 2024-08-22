<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {
    CreatePopoverContextProps,
    CreatePopoverContextReturn,
  } from './context.svelte.js';

  export interface PopoverProps extends Omit<CreatePopoverContextProps, 'id'> {
    id?: string | null;
    children?: Snippet<[CreatePopoverContextReturn]>;
  }
</script>

<script lang="ts">
  import {useEnvironmentContext} from '$lib/environment-provider/index.js';
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {createPopoverContext, setPopoverContext} from './context.svelte.js';

  let {id, dir, getRootNode, children, ...props}: PopoverProps = $props();

  let localeContext = useLocaleContext();
  let environmentContext = useEnvironmentContext();

  let context = createPopoverContext({
    id: id ?? createUniqueId(),
    dir: dir ?? localeContext?.dir,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
    ...props,
  });

  setPopoverContext(context);
</script>

{@render children?.(context)}
