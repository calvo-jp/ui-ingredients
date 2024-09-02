<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface RadioGroupItemHiddenInputProps extends HTMLProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    getRadioGroupContext,
    getRadioGroupItemPropsContext,
  } from './context.svelte.js';

  let {...props}: RadioGroupItemHiddenInputProps = $props();

  let radioGroup = getRadioGroupContext();
  let itemProps = getRadioGroupItemPropsContext();

  let mergedProps = $derived(
    mergeProps(props, radioGroup.getItemHiddenInputProps(itemProps)),
  );
</script>

<input {...mergedProps} />
