<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DialogDescriptionProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useDialogContext} from './context.svelte.js';

  let {children, ...props}: DialogDescriptionProps = $props();

  let context = useDialogContext();

  let attrs = $derived(mergeProps(props, context.getDescriptionProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
