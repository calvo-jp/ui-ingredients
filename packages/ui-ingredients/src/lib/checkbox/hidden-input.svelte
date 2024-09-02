<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface CheckboxHiddenInputProps extends HTMLProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getCheckboxContext} from './context.svelte.js';

  let {...props}: CheckboxHiddenInputProps = $props();

  let checkbox = getCheckboxContext();

  let mergedProps = $derived(mergeProps(props, checkbox.getHiddenInputProps()));
</script>

<input {...mergedProps} />
