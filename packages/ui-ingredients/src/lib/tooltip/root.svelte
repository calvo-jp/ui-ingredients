<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {CreateTooltipProps, CreateTooltipReturn} from './create-tooltip.svelte.js';

  export interface TooltipProps extends Omit<CreateTooltipProps, 'id'> {
    id?: string | null;
    children?: Snippet<[api: CreateTooltipReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {getLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {tooltipContext} from './context.svelte.js';
  import {createTooltip} from './create-tooltip.svelte.js';

  let {id, dir, getRootNode, children, ...props}: TooltipProps = $props();

  let localeContext = getLocaleContext();
  let environmentContext = getEnvironmentContext();

  let uid = createUniqueId();

  let context = createTooltip({
    id: id ?? uid,
    dir: dir ?? localeContext?.dir,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
    ...props,
  });

  tooltipContext.set(context);
</script>

{@render children?.(context)}
