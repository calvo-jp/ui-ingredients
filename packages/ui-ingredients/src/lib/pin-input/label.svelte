<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface PinInputLabelProps extends HtmlProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {pinInputContext} from './context.svelte.js';

  let {children, ...props}: PinInputLabelProps = $props();

  let context = pinInputContext.get();

  let attrs = $derived(mergeProps(props, context.getLabelProps()));
</script>

<label {...attrs}>
  {@render children?.()}
</label>
