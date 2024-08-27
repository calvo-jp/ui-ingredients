<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateToastReturn} from './create-toast.svelte.js';

  export interface ToastProps extends Omit<HtmlProps<'div'>, 'children'> {
    children?: Snippet<[toast: CreateToastReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {toastContext} from './context.svelte.js';

  let {children, ...props}: ToastProps = $props();

  let toast = toastContext.get();
  let attrs = $derived(mergeProps(props, toast.getRootProps()));
</script>

<div {...attrs}>
  <div {...toast.getGhostBeforeProps()}></div>

  {@render children?.(toast)}

  <div {...toast.getGhostAfterProps()}></div>
</div>
