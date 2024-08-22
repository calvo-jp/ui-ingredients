<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DialogPositionerProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useDialogContext} from './context.svelte.js';

  let {children, ...props}: DialogPositionerProps = $props();

  let context = useDialogContext();

  let attrs = $derived(mergeProps(props, context.getPositionerProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
