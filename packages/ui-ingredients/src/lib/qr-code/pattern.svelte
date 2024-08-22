<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface QRCodePatternProps extends HtmlIngredientProps<'path'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useQRCodeContext} from './context.svelte.js';

  let {children, ...props}: QRCodePatternProps = $props();

  let context = useQRCodeContext();

  let attrs = $derived(mergeProps(props, context.getPatternProps()));
</script>

<path {...attrs}>
  {@render children?.()}
</path>
