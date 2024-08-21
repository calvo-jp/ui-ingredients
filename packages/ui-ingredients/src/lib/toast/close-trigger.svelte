<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ToastCloseTriggerProps
    extends HtmlIngredientProps<'button'> {}
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
