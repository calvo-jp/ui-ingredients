<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface PinInputClearTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {pinInputContext} from './context.svelte.js';

  let {children, onclick, ...props}: PinInputClearTriggerProps = $props();

  let pinInput = pinInputContext.get();
</script>

<button
  type="button"
  onclick={(e) => {
    onclick?.(e);
    pinInput.clearValue();
  }}
  {...props}
>
  {@render children?.()}
</button>
