<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {CreatePopoverProps, CreatePopoverReturn} from './create-popover.svelte.js';

  export interface PopoverProps extends Omit<CreatePopoverProps, 'id'> {
    id?: string | null;
    children?: Snippet<[api: CreatePopoverReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {getLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {popoverContext} from './context.svelte.js';
  import {createPopover} from './create-popover.svelte.js';

  let {id, dir, getRootNode, children, ...props}: PopoverProps = $props();

  let localeContext = getLocaleContext();
  let environmentContext = getEnvironmentContext();

  let uid = createUniqueId();

  let context = createPopover({
    id: id ?? uid,
    dir: dir ?? localeContext?.dir,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
    ...props,
  });

  popoverContext.set(context);
</script>

{@render children?.(context)}
