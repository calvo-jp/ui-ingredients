<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface DialogTitleProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {dialogContext} from './context.svelte.js';

  let {children, ...props}: DialogTitleProps = $props();

  let dialog = dialogContext.get();

  let attrs = $derived(mergeProps(props, dialog.getTitleProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
