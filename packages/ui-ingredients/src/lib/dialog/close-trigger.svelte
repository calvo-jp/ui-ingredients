<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface DialogCloseTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {dialogContext} from './context.svelte.js';

  let {children, ...props}: DialogCloseTriggerProps = $props();

  let context = dialogContext.get();

  let attrs = $derived(mergeProps(props, context.getCloseTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
