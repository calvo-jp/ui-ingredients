<script lang="ts" context="module">
  import type {Snippet} from 'svelte';
  import type {
    CreateTooltipContextProps,
    CreateTooltipContextReturn,
  } from './context.svelte.js';

  export interface TooltipProps extends Omit<CreateTooltipContextProps, 'id'> {
    id?: string | null;
    children?: Snippet<[CreateTooltipContextReturn]>;
  }
</script>

<script lang="ts">
  import {useEnvironmentContext} from '$lib/environment-provider/index.js';
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {uuid} from '$lib/utils.svelte.js';
  import {createTooltipContext, setTooltipContext} from './context.svelte.js';

  let {id, dir, getRootNode, children, ...props}: TooltipProps = $props();

  let localeContext = useLocaleContext();
  let environmentContext = useEnvironmentContext();

  let context = createTooltipContext({
    id: id ?? uuid(),
    dir: dir ?? localeContext?.dir,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
    ...props,
  });

  setTooltipContext(context);
</script>

{@render children?.(context)}
