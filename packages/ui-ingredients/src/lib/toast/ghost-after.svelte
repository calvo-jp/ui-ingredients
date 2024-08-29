<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface ToastGhostAfterProps extends Omit<HTMLProps<'span'>, 'children'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {toastContext} from './context.svelte.js';

  let {...props}: ToastGhostAfterProps = $props();

  let context = toastContext.get();

  let attrs = $derived(mergeProps(props, context.getGhostAfterProps()));
</script>

<span {...attrs}></span>
