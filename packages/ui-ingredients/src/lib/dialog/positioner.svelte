<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface DialogPositionerProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {dialogContext} from './context.svelte.js';

  let {children, ...props}: DialogPositionerProps = $props();

  let dialog = dialogContext.get();

  let attrs = $derived(mergeProps(props, dialog.getPositionerProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
