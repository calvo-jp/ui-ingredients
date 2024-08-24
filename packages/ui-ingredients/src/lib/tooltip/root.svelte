<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {CreateTooltipProps, CreateTooltipReturn} from './create-tooltip.svelte.js';

  export interface TooltipProps extends CreateTooltipProps {
    children?: Snippet<[api: CreateTooltipReturn]>;
  }
</script>

<script lang="ts">
  import {tooltipContext} from './context.svelte.js';
  import {createTooltip} from './create-tooltip.svelte.js';

  let {children, ...props}: TooltipProps = $props();

  let context = createTooltip(props);

  tooltipContext.set(context);
</script>

{@render children?.(context)}
