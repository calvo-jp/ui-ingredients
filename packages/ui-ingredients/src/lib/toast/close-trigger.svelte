<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ToastCloseTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {toastContext} from './context.svelte.js';

  let {children, ...props}: ToastCloseTriggerProps = $props();

  let context = toastContext.get();

  let attrs = $derived(mergeProps(props, context.getCloseTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
