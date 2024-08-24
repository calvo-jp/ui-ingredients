<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {IndicatorProps} from '@zag-js/clipboard';

  export interface ClipboardIndicatorProps
    extends Assign<HtmlIngredientProps<'span'>, Partial<IndicatorProps>> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {clipboardContext} from './context.svelte.js';

  let {copied = false, children, ...props}: ClipboardIndicatorProps = $props();

  let context = clipboardContext.get();

  let attrs = $derived(mergeProps(props, context.getIndicatorProps({copied})));
</script>

<span {...attrs}>
  {@render children?.()}
</span>
