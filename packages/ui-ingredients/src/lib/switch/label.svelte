<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SwitchLabelProps extends HtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {switchContext} from './context.svelte.js';

  let {children, ...props}: SwitchLabelProps = $props();

  let switch$ = switchContext.get();

  let attrs = $derived(mergeProps(props, switch$.getLabelProps()));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
