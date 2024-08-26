<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SignaturePadHiddenInputProps extends HtmlProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {signaturePadContext} from './context.svelte.js';

  let {...props}: SignaturePadHiddenInputProps = $props();

  let signaturePad = signaturePadContext.get();

  let attrs = $derived(mergeProps(props, signaturePad.getHiddenInputProps()));
</script>

<input {...attrs} />