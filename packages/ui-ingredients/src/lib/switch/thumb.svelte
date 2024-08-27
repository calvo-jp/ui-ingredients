<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SwitchThumbProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {switchContext} from './context.svelte.js';

  let {children, ...props}: SwitchThumbProps = $props();

  let switch$ = switchContext.get();

  let attrs = $derived(mergeProps(props, switch$.getThumbProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
