<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DialogTriggerProps extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useDialogContext} from './context.svelte.js';

  let {children, ...props}: DialogTriggerProps = $props();

  let context = useDialogContext();

  let attrs = $derived(mergeProps(props, context.getTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
