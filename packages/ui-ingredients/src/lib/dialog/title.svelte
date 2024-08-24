<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface DialogTitleProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {dialogContext} from './context.svelte.js';

  let {children, ...props}: DialogTitleProps = $props();

  let context = dialogContext.get();

  let attrs = $derived(mergeProps(props, context.getTitleProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
