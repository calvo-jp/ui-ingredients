<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SignaturePadClearTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {signaturePadContext} from './context.svelte.js';

  let {children,...props}: SignaturePadClearTriggerProps = $props();

  let signaturePad = signaturePadContext.get();

  let attrs = $derived(mergeProps(props, signaturePad.getClearTriggerProps()));
</script>

<button type="button" {...attrs} >
  {@render children?.()}
</button>
