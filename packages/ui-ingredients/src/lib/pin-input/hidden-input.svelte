<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface PinInputHiddenInputProps extends HTMLProps<'input'> {}
</script>

<script lang="ts">
  import {getFieldContext} from '$lib/field/context.svelte.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {pinInputContext} from './context.svelte.js';

  let {...props}: PinInputHiddenInputProps = $props();

  let field = getFieldContext();
  let pinInput = pinInputContext.get();

  let mergedProps = $derived(mergeProps(props, pinInput.getHiddenInputProps()));
</script>

<input aria-describedby={field?.['aria-describedby']} {...mergedProps} />
