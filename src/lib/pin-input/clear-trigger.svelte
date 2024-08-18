<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface PinInputClearTriggerProps extends Assign<SvelteHTMLElements['button'], {}> {}
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
