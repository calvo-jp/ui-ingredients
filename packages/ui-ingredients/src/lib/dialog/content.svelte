<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DialogContentProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useDialogContext} from './context.svelte.js';

  let {children, ...props}: DialogContentProps = $props();

  let context = useDialogContext();

  let attrs = $derived(mergeProps(props, context.getContentProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
