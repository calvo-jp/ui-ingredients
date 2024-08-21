<script lang="ts" context="module">
  import type {HtmlIngredientsProps} from '$lib/types.js';

  export interface ToastCloseTriggerProps
    extends HtmlIngredientsProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useToastContext} from './context.svelte.js';

  let {children, ...props}: ToastCloseTriggerProps = $props();

  let context = useToastContext();

  let attrs = $derived(mergeProps(props, context.getCloseTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
