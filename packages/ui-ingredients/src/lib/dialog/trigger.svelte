<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface DialogTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {dialogContext} from './context.svelte.js';

  let {children, ...props}: DialogTriggerProps = $props();

  let dialog = dialogContext.get();

  let attrs = $derived(mergeProps(props, dialog.getTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
