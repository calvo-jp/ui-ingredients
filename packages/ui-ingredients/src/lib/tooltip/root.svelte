<script lang="ts" module>
  import type {Snippet} from 'svelte';
  import type {
    CreateTooltipProps,
    CreateTooltipReturn,
  } from './create-tooltip.svelte.js';

  export interface TooltipProps extends CreateTooltipProps {
    children?: Snippet<[CreateTooltipReturn]>;
  }
</script>

<script lang="ts">
  import {setTooltipContext} from './context.svelte.js';
  import {createTooltip} from './create-tooltip.svelte.js';

  let {children, ...props}: TooltipProps = $props();

  let tooltip = createTooltip(props);

  setTooltipContext(tooltip);
</script>

{@render children?.(tooltip)}
