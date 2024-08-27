<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {InputProps} from '@zag-js/pin-input';

  export interface PinInputInputProps extends Assign<HtmlProps<'input'>, InputProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {pinInputContext} from './context.svelte.js';

  let {index, ...props}: PinInputInputProps = $props();

  let pinInput = pinInputContext.get();

  let attrs = $derived(mergeProps(props, pinInput.getInputProps({index})));
</script>

<input {...attrs} />
