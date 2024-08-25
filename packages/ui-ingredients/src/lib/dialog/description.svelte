<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface DialogDescriptionProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {dialogContext} from './context.svelte.js';

  let {children, ...props}: DialogDescriptionProps = $props();

  let dialog = dialogContext.get();

  let attrs = $derived(mergeProps(props, dialog.getDescriptionProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
