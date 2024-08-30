<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface ToastGhostBeforeProps
    extends Omit<HTMLProps<'span'>, 'children'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {toastContext} from './context.svelte.js';

  let {...props}: ToastGhostBeforeProps = $props();

  let context = toastContext.get();

  let mergedProps = $derived(mergeProps(props, context.getGhostBeforeProps()));
</script>

<span {...mergedProps}></span>
