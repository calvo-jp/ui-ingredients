<script lang="ts" context="module">
  import type {OptionalId} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateTooltipContextProps} from './context.svelte.js';

  export interface TooltipProps extends OptionalId<CreateTooltipContextProps> {
    children?: Snippet;
  }
</script>

<script lang="ts">
  import {nanoid} from 'nanoid/non-secure';
  import {createTooltipContext, setTooltipContext} from './context.svelte.js';

  let {id = nanoid(), children, ...props}: TooltipProps = $props();

  let context = createTooltipContext({id, ...props});

  setTooltipContext(context);
</script>

{@render children?.()}
