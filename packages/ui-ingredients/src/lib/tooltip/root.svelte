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
  import {uuid} from '$lib/utils.svelte.js';
  import {createTooltipContext, setTooltipContext} from './context.svelte.js';

  let {id, children, ...props}: TooltipProps = $props();

  let context = createTooltipContext({
    id: id ?? uuid(),
    ...props,
  });

  setTooltipContext(context);
</script>

{@render children?.(context)}
