<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface PinInputHiddenInputProps extends HTMLProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {pinInputContext} from './context.svelte.js';

  let {...props}: PinInputHiddenInputProps = $props();

  let pinInput = pinInputContext.get();

  let mergedProps = $derived(mergeProps(props, pinInput.getHiddenInputProps()));
</script>

<input {...mergedProps} />
