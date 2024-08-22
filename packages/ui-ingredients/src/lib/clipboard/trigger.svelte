<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ClipboardTriggerProps
    extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useClipboardContext} from './context.svelte.js';

  let {children, ...props}: ClipboardTriggerProps = $props();

  let context = useClipboardContext();

  let attrs = $derived(mergeProps(props, context.getTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
