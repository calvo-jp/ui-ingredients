<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface NumberInputInputProps extends HtmlProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {numberInputContext} from './context.svelte.js';

  let {...props}: NumberInputInputProps = $props();

  let numberInput = numberInputContext.get();

  let attrs = $derived(mergeProps(props, numberInput.getInputProps()));
</script>

<input {...attrs} />
