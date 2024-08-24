<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateToastReturn} from './create-toast.svelte.js';

  export interface ToastProps extends Omit<HtmlIngredientProps<'div'>, 'children'> {
    children?: Snippet<[api: CreateToastReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {toastContext} from './context.svelte.js';

  let {children, ...props}: ToastProps = $props();

  let context = toastContext.get();

  let attrs = $derived(mergeProps(props, context.getRootProps()));
</script>

<div {...attrs}>
  <div {...context.getGhostBeforeProps()}></div>

  {@render children?.(context)}

  <div {...context.getGhostAfterProps()}></div>
</div>
