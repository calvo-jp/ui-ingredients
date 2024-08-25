<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface DialogTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {dialogContext} from './context.svelte.js';

  let {children, ...props}: DialogTriggerProps = $props();

  let dialog = dialogContext.get();

  let attrs = $derived(mergeProps(props, dialog.getTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
