<script lang="ts" module>
  import type {Assign, HTMLProps} from '$lib/types.js';
  import type {HiddenInputProps} from '@zag-js/signature-pad';

  export interface SignaturePadHiddenInputProps
    extends Assign<HTMLProps<'input'>, HiddenInputProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {signaturePadContext} from './context.svelte.js';

  let {value, ...props}: SignaturePadHiddenInputProps = $props();

  let signaturePad = signaturePadContext.get();

  let mergedProps = $derived(
    mergeProps(props, signaturePad.getHiddenInputProps({value})),
  );
</script>

<input {...mergedProps} />
