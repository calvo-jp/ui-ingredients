<script lang="ts" context="module">
  import type {HtmlIngredientsProps} from '$lib/types.js';

  export interface PinInputClearTriggerProps
    extends HtmlIngredientsProps<'button'> {}
</script>

<script lang="ts">
  import {usePinInputContext} from './context.svelte.js';

  let {children, onclick, ...props}: PinInputClearTriggerProps = $props();

  let context = usePinInputContext();
</script>

<button
  type="button"
  onclick={(e) => {
    onclick?.(e);
    context.clearValue();
  }}
  {...props}
>
  {@render children?.()}
</button>
