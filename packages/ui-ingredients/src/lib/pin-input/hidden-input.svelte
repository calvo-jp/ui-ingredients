<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface PinInputHiddenInputProps extends HtmlProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {pinInputContext} from './context.svelte.js';

  let {...props}: PinInputHiddenInputProps = $props();

  let pinInput = pinInputContext.get();

  let attrs = $derived(mergeProps(props, pinInput.getHiddenInputProps()));
</script>

<input {...attrs} />
