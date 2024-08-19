<script lang="ts" context="module">
  import type {OptionalId} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateTooltipContextProps, CreateTooltipContextReturn} from './context.svelte.js';

  export interface TooltipProps extends OptionalId<CreateTooltipContextProps> {
    children?: Snippet<[CreateTooltipContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {createTooltipContext, setTooltipContext} from './context.svelte.js';

  let {id = uuid(), children, ...props}: TooltipProps = $props();

  let context = createTooltipContext({id, ...props});

  setTooltipContext(context);
</script>

{@render children?.(context)}
