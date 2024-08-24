<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface PinInputClearTriggerProps extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {pinInputContext} from './context.svelte.js';

  let {children, onclick, ...props}: PinInputClearTriggerProps = $props();

  let context = pinInputContext.get();
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
