<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ToastGhostBeforeProps extends Omit<HtmlProps<'span'>, 'children'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {toastContext} from './context.svelte.js';

  let {...props}: ToastGhostBeforeProps = $props();

  let context = toastContext.get();

  let attrs = $derived(mergeProps(props, context.getGhostBeforeProps()));
</script>

<span {...attrs}></span>
