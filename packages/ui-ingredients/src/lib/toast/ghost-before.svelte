<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface ToastGhostBeforeProps
    extends Omit<HTMLProps<'span'>, 'children'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getToastContext} from './context.svelte.js';

  let {...props}: ToastGhostBeforeProps = $props();

  let context = getToastContext();

  let mergedProps = $derived(mergeProps(props, context.getGhostBeforeProps()));
</script>

<span {...mergedProps}></span>
